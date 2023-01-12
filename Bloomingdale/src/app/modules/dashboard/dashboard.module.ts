import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CartComponent } from './cart/cart.component';
import {MatIconModule} from "@angular/material/icon";
import { CustomerComponent } from './customer/customer.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";


@NgModule({
  declarations: [
    DashboardComponent,
    CartComponent,
    CustomerComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ]
})
export class DashboardModule { }
