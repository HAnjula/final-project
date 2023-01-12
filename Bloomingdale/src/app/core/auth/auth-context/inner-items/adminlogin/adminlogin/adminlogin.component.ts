import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {

  adminloginForm=new FormGroup({
    username:new FormControl(null,[Validators.required]),
    password:new FormControl(null,[Validators.required]),
  });
  constructor(public router: Router,private authService:AuthService) { }

  ngOnInit(): void {
  }
  checkAdmin() {
    if(this.authService.adminCheck(this.adminloginForm.value.username, this.adminloginForm.value.password)){
      this.router.navigate(['/admin']);
    }
  }
}
