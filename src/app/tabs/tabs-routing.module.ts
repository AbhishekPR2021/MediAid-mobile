import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'diet',
        loadChildren:() => import('../diet/diet.module').then(m=> m.DietModule)
      },
      {
        path: 'medicines',
        loadChildren:() => import('../medicines/medicines.module').then(m=> m.MedicinesModule)
      },
      {
        path: 'doctor',
        loadChildren:() => import('../doctor/doctor.module').then(m=> m.DoctorModule)
      },
      {
        path: 'stress-tracker',
        loadChildren:() => import('../stress-tracker/stress-tracker.module').then(m=> m.StressTrackerModule)
      },
      {
        path: 'home',
        loadChildren:() => import('../home/home.module').then(m=> m.HomeModule)
      },

      {
        path: '',
        redirectTo: '/tabs/diet',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/diet',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
