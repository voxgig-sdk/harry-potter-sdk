package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewCharacterEntityFunc func(client *HarryPotterSDK, entopts map[string]any) HarryPotterEntity

var NewSpellEntityFunc func(client *HarryPotterSDK, entopts map[string]any) HarryPotterEntity

