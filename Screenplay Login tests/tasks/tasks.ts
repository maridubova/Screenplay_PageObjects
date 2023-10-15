
import { Actor, Interaction, Task } from '@serenity-js/core';
import {credentials } from '../testdata';
import { Click, isSelected } from '@serenity-js/web';
import { PageElement } from '@serenity-js/web';
import { By } from '@serenity-js/web';

export const Login = {
  as: (email: string, password: string) =>
    Task.where(`#actor attempts to log in with ${credentials}`),
};

export const Logout = {
  fromSettings: () => {
     Task.where(`#actor logs out from settings page`), (actor: Actor) =>
        actor.attemptsTo(
          
         Click.on(PageElement.located(By.css('button.btn.btn-outline-danger'))
      ))},
};
export const TriesToNavigate = {
  toHomepage: () =>
    Task.where(`#actor navigates to the homepage` || 
  'http://angular.realworld.io/'),

  toLoginPage: () =>
  Task.where(`#actor navigates to the login page` || 'http://angular.realworld.io/login' 
  ),

  toSettingsPage: () =>
   Task.where( `#actor navigates to settings` ||
'http://angular.realworld.io/settings'
   ), 
};








