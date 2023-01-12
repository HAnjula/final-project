import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthContextComponent } from './core/auth/auth-context/auth-context.component';
import { LoginComponent } from './core/auth/auth-context/inner-items/login/login.component';
import { SignupComponent } from './core/auth/auth-context/inner-items/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundPageComponent } from './core/not-found-page/not-found-page.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {CookieService} from "ngx-cookie-service";
import {MatIconModule} from "@angular/material/icon";
import { AdminloginComponent } from './core/auth/auth-context/inner-items/adminlogin/adminlogin/adminlogin.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthContextComponent,
    LoginComponent,
    SignupComponent,
    NotFoundPageComponent,
    AdminloginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatIconModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
