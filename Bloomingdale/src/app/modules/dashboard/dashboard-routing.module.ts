import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import {CartComponent} from "./cart/cart.component";
import {CustomerComponent} from "./customer/customer.component";


const routes: Routes = [
  {path:'cart',component:CartComponent},
  { path: '', component: DashboardComponent},
  {path:'customer',component:CustomerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
