import { Actor, Answerable, Task, d } from '@serenity-js/core'
import { By, Click, Enter, PageElement, Press, Key, Navigate } from '@serenity-js/web'
import { credentials } from '../testdata';
export const email  =  'java1@selenium.test';
export const password = 'JavaSeleniumTest1';
export const openWebsiteAt= (HomePage: Answerable<'https://angular.realworld.io/'>) => 



Task.where(`#actor opens website at ${ HomePage }`,
    Navigate.to(HomePage),
);
export const openLoginPage = (LoginPage: 'https://angular.realworld.io/login') =>
Task.where(`#actor goes to login page ${ LoginPage }`,
    Navigate.to(LoginPage),
);
 
 export const FillEmail = (email: 'java1@selenium.test') => 
 Task.where (`#actor signs is as ${ email}`,
 Enter.theValue(email).into(PageElement.located(By.id('input[formcontrolname="email"]'))),
 ); 
 
 export const FillPassword = (password: 'JavaSeleniumTest1') => 
 Task.where (`#actor signs is as ${ password }`,
 Enter.theValue(password).into(PageElement.located(By.id('input[formcontrolname="password"]'))),
 );
 
 export const Logout = {
    fromSettings: () => {
       Task.where(`#actor logs out from settings page as`), (actor: Actor) =>
          actor.attemptsTo(
           Click.on(PageElement.located(By.css('button.btn.btn-outline-danger'))
        ))
    }};
  //example of interaction
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
  )
};