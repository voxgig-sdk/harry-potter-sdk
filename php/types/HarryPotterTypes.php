<?php
declare(strict_types=1);

// Typed models for the HarryPotter SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Character entity data model. */
class Character
{
    public ?string $actor = null;
    public ?bool $alive = null;
    public ?string $ancestry = null;
    public ?string $date_of_birth = null;
    public ?string $eye_colour = null;
    public ?string $hair_colour = null;
    public ?bool $hogwarts_staff = null;
    public ?bool $hogwarts_student = null;
    public ?string $house = null;
    public ?string $id = null;
    public ?string $image = null;
    public ?string $name = null;
    public ?string $patronus = null;
    public ?array $wand = null;
    public ?bool $wizard = null;
}

/** Request payload for Character#load. */
class CharacterLoadMatch
{
    public ?string $house = null;
    public ?string $id = null;
}

/** Request payload for Character#list. */
class CharacterListMatch
{
    public ?string $actor = null;
    public ?bool $alive = null;
    public ?string $ancestry = null;
    public ?string $date_of_birth = null;
    public ?string $eye_colour = null;
    public ?string $hair_colour = null;
    public ?bool $hogwarts_staff = null;
    public ?bool $hogwarts_student = null;
    public ?string $house = null;
    public ?string $id = null;
    public ?string $image = null;
    public ?string $name = null;
    public ?string $patronus = null;
    public ?array $wand = null;
    public ?bool $wizard = null;
}

/** Spell entity data model. */
class Spell
{
    public ?string $description = null;
    public ?string $id = null;
    public ?string $name = null;
}

/** Request payload for Spell#list. */
class SpellListMatch
{
    public ?string $description = null;
    public ?string $id = null;
    public ?string $name = null;
}

