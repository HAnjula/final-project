import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {UserDetailsService} from "../../../../../service/user-details.service";
import {CookieService} from "ngx-cookie-service";
import {LocalDataService} from "../../../../../service/local-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm=new FormGroup({
    email:new FormControl(null,[Validators.email]),
    password:new FormControl(null,[Validators.required]),
  });


  constructor(private router:Router,private LocalDataService:LocalDataService,private _snackBar: MatSnackBar,private userDetailsService: UserDetailsService) { }

  ngOnInit(): void {
     // this.isLogged();
  }

  // private isLogged(){
  //   return this.LocalDataService.isLogged().then(response=>{
  //     this.router.navigate(['/dashboard']);
  //   }).catch(error=>{
  //
  //   });
  // }

  login() {
    this.userDetailsService.login(
      this.loginForm.get('email')?.value,
      this.loginForm.get('password')?.value
    ).subscribe(response=>{
     this.LocalDataService.setCookie('userToken',response.token);
     this.router.navigate(['/dashboard']);
     this.openSnackBar(response.message,'close');
    },error => {
      console.log(error);
    })
  }

  openSnackBar(message: string,action:string){
    this._snackBar.open(message,action,{
      duration:3000
    });
  }
}
