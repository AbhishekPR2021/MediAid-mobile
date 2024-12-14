import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorComponent } from './doctor.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [DoctorComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
