
export class HomePage {
  
  static open() {
    'http://angular.realworld.io/'
  }
  static goToLoginPage(): string {
    return 'a[routerlink="/login"]';
  }

  static userIsLoggedIn(): string {
    return 'a[routerlink="/editor"]';
  }

  static goToSettings(): string {
    return 'a[routerlink="/settings"]';
  }

};
