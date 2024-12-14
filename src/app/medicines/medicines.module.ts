import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicineRoutingModule } from './medicines-routing.module';
import { MedicinesComponent } from './medicines.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MedicinesComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    MedicineRoutingModule
  ]
})
export class MedicinesModule { }
