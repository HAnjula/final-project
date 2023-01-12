import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public activeCustomerDetail : any ;
  readonly adminUserName : string = 'admin';
  readonly adminPassword : string = 'admin';
  loggedIn: any;

  constructor() { }


  adminCheck(userName: any, password: any) {
    if(this.adminUserName==userName && this.adminPassword==password){
      return true
    }
    return false;
  }
}
