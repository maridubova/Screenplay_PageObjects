import { actorCalled } from '@serenity-js/core';
import { FillEmail, FillPassword, openLoginPage, openWebsiteAt, email, password } from '../tasks/tasks2';
import {test} from '@serenity-js/playwright-test';
import { Ensure, equals } from '@serenity-js/assertions'
import { CallAnApi, GetRequest, LastResponse, Send } from '@serenity-js/rest'


test('My example user should be able to Login',  () => {
   actorCalled('James')
    openWebsiteAt('https://angular.realworld.io/'), 
    openLoginPage('https://angular.realworld.io/login'), 
    FillEmail(email),
    FillPassword(password); //single task of filling in value to field -> 
     //Interaction would be 'Login to the page', can be composed of singe tasks 
    //  asertions can be added eg. 
    // Ensure.that(LastResponse.status(), equals(200))
}); 

