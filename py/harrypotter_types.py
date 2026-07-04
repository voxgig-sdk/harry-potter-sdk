# Typed models for the HarryPotter SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Character(TypedDict, total=False):
    actor: str
    alive: bool
    ancestry: str
    date_of_birth: str
    eye_colour: str
    hair_colour: str
    hogwarts_staff: bool
    hogwarts_student: bool
    house: str
    id: str
    image: str
    name: str
    patronus: str
    wand: dict
    wizard: bool


class CharacterLoadMatch(TypedDict):
    house: str
    id: str


class CharacterListMatch(TypedDict, total=False):
    actor: str
    alive: bool
    ancestry: str
    date_of_birth: str
    eye_colour: str
    hair_colour: str
    hogwarts_staff: bool
    hogwarts_student: bool
    house: str
    id: str
    image: str
    name: str
    patronus: str
    wand: dict
    wizard: bool


class Spell(TypedDict, total=False):
    description: str
    id: str
    name: str


class SpellListMatch(TypedDict, total=False):
    description: str
    id: str
    name: str
