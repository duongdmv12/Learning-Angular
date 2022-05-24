import { CommonModule } from '@angular/common';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorModifyComponent } from './doctor-modify/doctor-modify.component';
import { DoctorService } from 'src/app/shared/services/doctor.service';
import { DoctorsComponent } from './doctors.component';
import { DoctorsRoutes } from './doctors-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

const declarations = [
  DoctorsComponent,
  DoctorModifyComponent,
  DoctorListComponent
];

const imports: any = [
  SharedModule,
  CommonModule,
  DoctorsRoutes
];

@NgModule({
  imports: [
    ...imports
  ],
  declarations: [
    ...declarations
  ],
  exports: [
    ...declarations,
    ...imports
  ],
  providers: [
    DoctorService
  ]
})
export class DoctorsModule { }
