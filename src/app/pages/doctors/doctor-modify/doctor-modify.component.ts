import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-doctor-modify',
  templateUrl: './doctor-modify.component.html',
  styleUrls: ['./doctor-modify.component.scss'],
  providers: [
  ]
})
export class DoctorModifyComponent implements OnInit {

  doctorForm!: FormGroup;

  controlNames = {
    name: 'name',
    address: 'address',
    position: 'position',
    phone: 'phone',
    email: 'email'
  };

  msgForm = {
    required: 'Please input value'
  };

  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    const me = this;
    me.initForm();
  }

  private initForm(): void {
    const me = this;
    me.doctorForm = me.builder.group({
      [me.controlNames.name]: [
        '',
        [
          Validators.required
        ]
      ],
      [me.controlNames.address]: [
        '',
        [
          Validators.required
        ]
      ],
      [me.controlNames.position]: [
        '',
        [
          Validators.required
        ]
      ],
      [me.controlNames.phone]: [
        '',
        [
          Validators.required
        ]
      ],
      [me.controlNames.email]: [
        '',
        [
          Validators.required
        ]
      ]
    })
  }

  public onSubmit(): void {

  }
}
