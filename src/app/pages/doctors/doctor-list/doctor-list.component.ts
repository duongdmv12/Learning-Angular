import { Component, Input, OnInit } from '@angular/core';

import { IItemDoctor } from 'src/app/shared/models/doctor.model';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss'],
  providers: []
})
export class DoctorListComponent implements OnInit {

  public items!: IItemDoctor[];
  @Input('items')
  set dataItems(items: IItemDoctor[]) {
    const me = this;
    me.items = [...items];
    me.items = me.items.map(val => val);
  }

  constructor() { }

  ngOnInit() {
  }

}
