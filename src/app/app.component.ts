import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControlDirective, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent implements OnInit {

  myForm!: FormGroup;

  public controlNames = {
    username: 'username',
    password: 'password',
    confirmPassword: 'confirmPass',
    groups: 'groups'
  };

  public msgKeys = {
    required: 'Please input data',
    minlength: 'min length'
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
        [me.controlNames.password]: ['', [Validators.required, Validators.minLength(10)]],
        [me.controlNames.confirmPassword]: ['']
      }
    );
  }
}
