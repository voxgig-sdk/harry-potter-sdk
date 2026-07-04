# Typed models for the HarryPotter SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Character:
    actor: Optional[str] = None
    alive: Optional[bool] = None
    ancestry: Optional[str] = None
    date_of_birth: Optional[str] = None
    eye_colour: Optional[str] = None
    hair_colour: Optional[str] = None
    hogwarts_staff: Optional[bool] = None
    hogwarts_student: Optional[bool] = None
    house: Optional[str] = None
    id: Optional[str] = None
    image: Optional[str] = None
    name: Optional[str] = None
    patronus: Optional[str] = None
    wand: Optional[dict] = None
    wizard: Optional[bool] = None


@dataclass
class CharacterLoadMatch:
    house: str
    id: str


@dataclass
class CharacterListMatch:
    actor: Optional[str] = None
    alive: Optional[bool] = None
    ancestry: Optional[str] = None
    date_of_birth: Optional[str] = None
    eye_colour: Optional[str] = None
    hair_colour: Optional[str] = None
    hogwarts_staff: Optional[bool] = None
    hogwarts_student: Optional[bool] = None
    house: Optional[str] = None
    id: Optional[str] = None
    image: Optional[str] = None
    name: Optional[str] = None
    patronus: Optional[str] = None
    wand: Optional[dict] = None
    wizard: Optional[bool] = None


@dataclass
class Spell:
    description: Optional[str] = None
    id: Optional[str] = None
    name: Optional[str] = None


@dataclass
class SpellListMatch:
    description: Optional[str] = None
    id: Optional[str] = None
    name: Optional[str] = None

