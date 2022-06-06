import { Component, Input, OnInit } from '@angular/core';

import { DoctorModel } from 'src/app/shared/models/doctor.model';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss'],
  providers: []
})
export class DoctorListComponent implements OnInit {
  data: DoctorModel.DoctorInfo[] = [];

  @Input()
  set items(data: DoctorModel.DoctorInfo[]) {
    const me = this;
    me.data = data || [];
  }

  constructor() { }

  ngOnInit() {
  }

}
