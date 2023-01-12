import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AddItemComponent } from './add-item/add-item/add-item.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { UpdateItemComponent } from './update-item/update-item.component';
import { RemoveItemComponent } from './remove-item/remove-item.component';


@NgModule({
  declarations: [
    AdminComponent,
    AddItemComponent,
    UpdateItemComponent,
    RemoveItemComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTabsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class AdminModule { }
