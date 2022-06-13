import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  myForm!: FormGroup;

  public controlNames = {
    username: 'username',
    password: 'password',
    confirmPassword: 'confirmPass',
    groups: 'groups'
  };

  public msgKeys = {
    required: 'Please input data',
    minlength: 'min length',
    match: 'Not matching password'
  };


  constructor(private builder: FormBuilder) {
  }

  ngOnInit(): void {
    const me = this;
    me.initForm();
  }

  public onSubmitFormGroup() {
    const me = this;
    me.myForm.markAllAsTouched();
    me.myForm.markAsDirty();
    me.myForm.updateValueAndValidity();
    Object.keys(me.myForm.controls).map(
      controlName => {
        const control = me.myForm.get(controlName)
        control?.markAsDirty();
        control?.markAllAsTouched();
        control?.updateValueAndValidity();
      }
    );
    me.focusElementInvalid();
  }

  private focusElementInvalid() {
    const listEl = document.querySelectorAll('input.ng-invalid');
    for (let i = 0; i < listEl.length; i++) {
      (listEl.item(i) as HTMLElement)?.focus();
      return;
    }
  }

  private initForm() {
    const me = this;
    me.myForm = me.builder.group(
      {
        [me.controlNames.username]: ['', [Validators.required, Validators.minLength(10)]],
        [me.controlNames.password]: ['', [Validators.required, me.validateMatchingPassword(me.controlNames)]],
        [me.controlNames.confirmPassword]: ['', [Validators.required, me.validateMatchingPassword(me.controlNames)]]
      },
      {
        validators: [

        ]
      }
    );
  }

  private ways2() {
    const me = this;
    me.myForm.valueChanges.subscribe(
      value => {
        if (value.password === value.confirmPass) {
          me.myForm.get('password')?.setErrors({abc: true}, { emitEvent: false});
        }
      }
    );
  }

  private validateMatchingPassword(controlNames: { [prop: string]: string; }) {
    return (control: AbstractControl) => {
      if (!!control) {
        const parent = control.parent as FormGroup;
        if (!!parent) {
          const valueForm = parent.getRawValue();
          const passValue = valueForm[controlNames['password']];
          const confirmPassValue = valueForm[controlNames['confirmPassword']];
          if (!!passValue && !!confirmPassValue && passValue === confirmPassValue) {
            return null;
          }
        }
      }
      return {
        match: true
      };
    };
  }

}
