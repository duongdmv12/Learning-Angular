import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'doctors',
    loadChildren: () => import('./pages/doctors/doctors.module').then(md => md.DoctorsModule)
  },
  {
    path: 'appointment',
    loadChildren: () => import('./pages/appointment/appointment.module').then(md => md.AppointmentModule)
  },
  {
    path: '',
    redirectTo: '/doctors',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
