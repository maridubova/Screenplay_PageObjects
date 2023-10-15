
import { actorCalled} from '../actors/MyActor';
import { credentials } from '../testdata';
import {Login, Logout, TriesToNavigate} from '../tasks/tasks'
import {test} from '@playwright/test'




  test('User can Login', () => {
   actorCalled('James'), () => 
   TriesToNavigate.toLoginPage(),
   Login.as(credentials.email, credentials.password);
  });
  
  test('User can navigate to settings page and Logout ', () => {
    actorCalled('James'), () => 
    TriesToNavigate.toSettingsPage();
    Logout.fromSettings();
});
  


