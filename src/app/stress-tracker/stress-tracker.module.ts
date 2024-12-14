import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StressTrackerRoutingModule } from './stress-tracker-routing.module';
import { StressTrackerComponent } from './stress-tracker.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [StressTrackerComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    StressTrackerRoutingModule
  ]
})
export class StressTrackerModule { }
