package voxgigharrypottersdk

import (
	"github.com/voxgig-sdk/harry-potter-sdk/core"
	"github.com/voxgig-sdk/harry-potter-sdk/entity"
	"github.com/voxgig-sdk/harry-potter-sdk/feature"
	_ "github.com/voxgig-sdk/harry-potter-sdk/utility"
)

// Type aliases preserve external API.
type HarryPotterSDK = core.HarryPotterSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type HarryPotterEntity = core.HarryPotterEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type HarryPotterError = core.HarryPotterError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewCharacterEntityFunc = func(client *core.HarryPotterSDK, entopts map[string]any) core.HarryPotterEntity {
		return entity.NewCharacterEntity(client, entopts)
	}
	core.NewSpellEntityFunc = func(client *core.HarryPotterSDK, entopts map[string]any) core.HarryPotterEntity {
		return entity.NewSpellEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewHarryPotterSDK = core.NewHarryPotterSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
