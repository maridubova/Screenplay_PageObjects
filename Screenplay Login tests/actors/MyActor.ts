import {  Actor, Cast, actorCalled } from '@serenity-js/core';
import { BrowseTheWeb } from '@serenity-js/web';
export class James implements Cast {
  constructor(private readonly actor: Actor) {}
    prepare(actor: Actor): Actor {
      return actor.whoCan(BrowseTheWeb)
      
    }

  static as(actor: Actor): James {
    return new James(actor);
  }
  
  whoCan(...abilities: any[]) {
    return this.actor.whoCan(BrowseTheWeb);
  }
  

  // You can define methods or properties for James 
}

export { Actor, actorCalled };


 