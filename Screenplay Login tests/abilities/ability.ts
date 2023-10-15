
import { Ability, UsesAbilities, actorCalled } from "@serenity-js/core"

const Actor = actorCalled('James')

export interface CanHaveAbilities<Returned_Type = UsesAbilities> {
    
    whoCan(BrowseTheWebWithPlaywright: Ability[]): Returned_Type;
}