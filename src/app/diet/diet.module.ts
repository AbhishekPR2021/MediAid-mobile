import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DietRoutingModule } from './diet-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DietComponent } from './diet.component';



@NgModule({
  declarations: [DietComponent],
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    DietRoutingModule
  ]
})
export class DietModule { }
