import { RouterModule, Routes } from '@angular/router';

import { DoctorModifyComponent } from './doctor-modify/doctor-modify.component';
import { DoctorsComponent } from './doctors.component';

const routes: Routes = [
  {
    path: '',
    component: DoctorsComponent
  },
  {
    path: 'create',
    component: DoctorModifyComponent
  }
];

export const DoctorsRoutes = RouterModule.forChild(routes);
