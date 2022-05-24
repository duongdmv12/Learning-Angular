import { RouterModule, Routes } from '@angular/router';

import { DoctorsComponent } from './doctors.component';

const routes: Routes = [
  {
    path: '',
    component: DoctorsComponent
  },
];

export const DoctorsRoutes = RouterModule.forChild(routes);
