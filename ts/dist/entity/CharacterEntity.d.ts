import { HarryPotterEntityBase } from '../HarryPotterEntityBase';
import type { HarryPotterSDK } from '../HarryPotterSDK';
import type { Control } from '../types';
import type { Character, CharacterLoadMatch, CharacterListMatch } from '../HarryPotterTypes';
declare class CharacterEntity extends HarryPotterEntityBase<Character> {
    constructor(client: HarryPotterSDK, entopts: any);
    make(this: CharacterEntity): CharacterEntity;
    load(this: any, reqmatch?: CharacterLoadMatch, ctrl?: Control): Promise<CharacterEntity>;
    list(this: any, reqmatch?: CharacterListMatch, ctrl?: Control): Promise<CharacterEntity[]>;
}
export { CharacterEntity };
