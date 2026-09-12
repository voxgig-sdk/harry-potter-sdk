import { HarryPotterEntityBase } from '../HarryPotterEntityBase';
import type { HarryPotterSDK } from '../HarryPotterSDK';
import type { Control } from '../types';
import type { Spell, SpellListMatch } from '../HarryPotterTypes';
declare class SpellEntity extends HarryPotterEntityBase<Spell> {
    constructor(client: HarryPotterSDK, entopts: any);
    make(this: SpellEntity): SpellEntity;
    list(this: any, reqmatch?: SpellListMatch, ctrl?: Control): Promise<SpellEntity[]>;
}
export { SpellEntity };
