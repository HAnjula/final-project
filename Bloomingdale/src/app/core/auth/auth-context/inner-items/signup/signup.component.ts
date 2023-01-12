import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserDetailDto} from "../../../../../model/UserDetailDto";
import {UserDetailsService} from "../../../../../service/user-details.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm=new FormGroup({
    fullName:new FormControl(null,[Validators.required]),
    email:new FormControl(null,[Validators.email]),
    password:new FormControl(null,[Validators.required]),
  });

  constructor( private _snackBar: MatSnackBar,private userDetailsService: UserDetailsService) { }

  ngOnInit(): void {
  }
public signUp() {
  let dataDto: UserDetailDto = new UserDetailDto(
    this.signUpForm.get('fullName')?.value,
    this.signUpForm.get('email')?.value,
    this.signUpForm.get('password')?.value,
    'https://media.istockphoto.com/id/1210939712/vector/user-icon-people-icon-isolated-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=vKDH9j7PPMN-AiUX8vsKlmOonwx7wjqdKiLge7PX1ZQ=',
    new Date()
  );

  this.userDetailsService.signUp(dataDto).subscribe(response=>{
    console.log(response);
    this.openSnackBar('successful','close');
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
