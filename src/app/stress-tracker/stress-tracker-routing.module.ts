import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StressTrackerComponent } from './stress-tracker.component';
const routes: Routes = [
  {
    path: '',
    component: StressTrackerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StressTrackerRoutingModule {}
