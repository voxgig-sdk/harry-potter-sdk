export interface Character {
    actor?: string;
    alive?: boolean;
    ancestry?: string;
    core?: string;
    dateOfBirth?: string;
    eyeColour?: string;
    hairColour?: string;
    hogwartsStaff?: boolean;
    hogwartsStudent?: boolean;
    house?: string;
    id?: string;
    image?: string;
    length?: number;
    name?: string;
    patronus?: string;
    wand?: Record<string, any>;
    wizard?: boolean;
    wood?: string;
}
export interface CharacterLoadMatch {
    id: string;
}
export interface CharacterListMatch {
    actor?: string;
    alive?: boolean;
    ancestry?: string;
    core?: string;
    dateOfBirth?: string;
    eyeColour?: string;
    hairColour?: string;
    hogwartsStaff?: boolean;
    hogwartsStudent?: boolean;
    house?: string;
    id?: string;
    image?: string;
    length?: number;
    name?: string;
    patronus?: string;
    wand?: Record<string, any>;
    wizard?: boolean;
    wood?: string;
    $action?: string;
    [action: string]: any;
}
export interface Spell {
    description?: string;
    id?: string;
    name?: string;
}
export interface SpellListMatch {
    description?: string;
    id?: string;
    name?: string;
}
