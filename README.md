# HarryPotter SDK

Look up Harry Potter characters, Hogwarts houses, staff, and spells from a free JSON API

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Harry Potter API

[HP-API](https://hp-api.onrender.com) is a community-run JSON API serving data about characters and spells from the Harry Potter universe. It is currently maintained by [KostaSav](https://github.com/KostaSav/hp-api) and traces back to an earlier project by bethfraser.

What you get from the API:

- All characters, including wizards, witches, and magical creatures (`/api/characters`)
- A single character by ID (`/api/character/:id`)
- Hogwarts students (`/api/characters/students`) and staff (`/api/characters/staff`)
- Characters filtered by house — Gryffindor, Slytherin, Ravenclaw, or Hufflepuff (`/api/characters/house/:house`)
- All spells with their incantations (`/api/spells`)

No authentication is required and the service is open to anyone. The host is the free tier of Render, so cold starts and occasional latency are normal. CORS is generally enabled on the JSON endpoints.

## Try it

**TypeScript**
```bash
npm install harry-potter
```

**Python**
```bash
pip install harry-potter-sdk
```

**PHP**
```bash
composer require voxgig/harry-potter-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/harry-potter-sdk/go
```

**Ruby**
```bash
gem install harry-potter-sdk
```

**Lua**
```bash
luarocks install harry-potter-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { HarryPotterSDK } from 'harry-potter'

const client = new HarryPotterSDK({})

// List all characters
const characters = await client.Character().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o harry-potter-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "harry-potter": {
      "command": "/abs/path/to/harry-potter-mcp"
    }
  }
}
```

## Entities

The API exposes 2 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Character** | A person or magical creature from the Harry Potter universe; served from `/api/characters`, `/api/character/:id`, `/api/characters/students`, `/api/characters/staff`, and `/api/characters/house/:house`. | `/api/characters` |
| **Spell** | A magical spell with its incantation; served from `/api/spells`. | `/api/spells` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from harrypotter_sdk import HarryPotterSDK

client = HarryPotterSDK({})

# List all characters
characters, err = client.Character(None).list(None, None)

# Load a specific character
character, err = client.Character(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'harrypotter_sdk.php';

$client = new HarryPotterSDK([]);

// List all characters
[$characters, $err] = $client->Character(null)->list(null, null);

// Load a specific character
[$character, $err] = $client->Character(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/harry-potter-sdk/go"

client := sdk.NewHarryPotterSDK(map[string]any{})

// List all characters
characters, err := client.Character(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "HarryPotter_sdk"

client = HarryPotterSDK.new({})

# List all characters
characters, err = client.Character(nil).list(nil, nil)

# Load a specific character
character, err = client.Character(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("harry-potter_sdk")

local client = sdk.new({})

-- List all characters
local characters, err = client:Character(nil):list(nil, nil)

-- Load a specific character
local character, err = client:Character(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = HarryPotterSDK.test()
const result = await client.Character().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = HarryPotterSDK.test(None, None)
result, err = client.Character(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = HarryPotterSDK::test(null, null);
[$result, $err] = $client->Character(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Character(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = HarryPotterSDK.test(nil, nil)
result, err = client.Character(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Character(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Harry Potter API

- Upstream: [https://hp-api.onrender.com](https://hp-api.onrender.com)

- Free to use; no API key required.
- Unofficial fan project — not affiliated with or endorsed by J.K. Rowling or Warner Bros.
- Maintained by KostaSav, based on the original `hp-api` project by bethfraser.
- No explicit open-source licence is published on the live site; check the upstream GitHub repository before redistributing data.

---

Generated from the Harry Potter API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
