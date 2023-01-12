import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as path from "path";
import {AuthContextComponent} from "./core/auth/auth-context/auth-context.component";
import {NotFoundPageComponent} from "./core/not-found-page/not-found-page.component";
import {IsLoggedGuard} from "./guards/is-logged.guard";
import {CartComponent} from "./modules/dashboard/cart/cart.component";
import {AuthGuard} from "./guards/auth.guard";
import {AdminComponent} from "./modules/admin/admin.component";



const routes: Routes = [
  {path:'login',component:AuthContextComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
   { path: 'dashboard', canActivate:[IsLoggedGuard],
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
  {path:'**',component:NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
