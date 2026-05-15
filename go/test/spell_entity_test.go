package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/harry-potter-sdk"
	"github.com/voxgig-sdk/harry-potter-sdk/core"

	vs "github.com/voxgig/struct"
)

func TestSpellEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Spell(nil)
		if ent == nil {
			t.Fatal("expected non-nil SpellEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := spellBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "spell." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set HARRYPOTTER_TEST_SPELL_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		spellRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.spell", setup.data)))
		var spellRef01Data map[string]any
		if len(spellRef01DataRaw) > 0 {
			spellRef01Data = core.ToMapAny(spellRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = spellRef01Data

		// LIST
		spellRef01Ent := client.Spell(nil)
		spellRef01Match := map[string]any{}

		spellRef01ListResult, err := spellRef01Ent.List(spellRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, spellRef01ListOk := spellRef01ListResult.([]any)
		if !spellRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", spellRef01ListResult)
		}

	})
}

func spellBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "spell", "SpellTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read spell test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse spell test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"spell01", "spell02", "spell03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("HARRYPOTTER_TEST_SPELL_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"HARRYPOTTER_TEST_SPELL_ENTID": idmap,
		"HARRYPOTTER_TEST_LIVE":      "FALSE",
		"HARRYPOTTER_TEST_EXPLAIN":   "FALSE",
		"HARRYPOTTER_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["HARRYPOTTER_TEST_SPELL_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["HARRYPOTTER_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["HARRYPOTTER_APIKEY"],
			},
			extra,
		})
		client = sdk.NewHarryPotterSDK(core.ToMapAny(mergedOpts))
	}

	live := env["HARRYPOTTER_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["HARRYPOTTER_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
