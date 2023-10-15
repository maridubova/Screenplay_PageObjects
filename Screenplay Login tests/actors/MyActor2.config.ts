 import {  Actor, Cast, Task, actorCalled } from '@serenity-js/core';
import { BrowseTheWebWithPlaywright } from '@serenity-js/playwright';
import { BrowseTheWeb } from '@serenity-js/web';
export class James implements Cast {
  static actor: any;

  static whoCan(abilities: BrowseTheWeb, BrowseTheWebWithPlaywright: any) {
    return this.actor.whoCan(BrowseTheWebWithPlaywright);
  }
  constructor(private readonly actor: Actor) {}
    prepare(James: Actor): Actor {
      return James.whoCan(BrowseTheWeb, BrowseTheWebWithPlaywright)
  
    };

  static as(James: Actor): James {
  return new this.actor(James);
  }
  
  whoCan(...abilities: any[]) {
    return this.actor.whoCan(BrowseTheWeb, BrowseTheWebWithPlaywright);
  }
}

export { Actor, actorCalled };

