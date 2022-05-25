import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  myForm!: FormGroup;

  myFormGroupArray!: FormGroup;

  model = {
    username: '',
    password: '',
    confirmPassword: ''
  };

  public controlNames = {
    username: 'username',
    password: 'password',
    confirmPassword: 'confirmPass',
    groups: 'groups'
  };

  private msgKeys = {
    required: 'Please input data',
    minlength: 'min length'
  };


  constructor(private builder: FormBuilder) {
  }

  ngOnInit(): void {
    const me = this;
    // me.initForm();
    me.initFormArray();
  }

  public onSubmit() {
    console.log(this.model);
  }

  public onSubmitFormGroup() {
    console.log(this.myForm.value);
  }

  private initForm() {
    const me = this;
    // the first way
    // me.myForm = me.builder.group(
    //   {
    //     username1: ['', [Validators.required, Validators.minLength(10)]],
    //     password: ['', [ Validators.required, Validators.minLength(10) ]],
    //     confirmPassword: ['']
    //   }
    // );

    me.myForm = me.builder.group(
      {
        [me.controlNames.username]: ['', [Validators.required, Validators.minLength(10)]],
        [me.controlNames.password]: ['', [Validators.required, Validators.minLength(10)]],
        [me.controlNames.confirmPassword]: ['']
      }
    );
  }

  private initFormArray() {
    const me = this;
    me.myFormGroupArray = me.builder.group({
      groups: me.builder.array(me.buildFormArray())
    });
  }

  private buildFormArray(itemLength = 2) {
    const result = [] as Array<FormGroup>;
    const me = this;
    for (let i = 0; i < itemLength; i++) {
      const formGroupItem = me.builder.group({
        [me.controlNames.username]: ['', [Validators.required, Validators.minLength(10)]],
        [me.controlNames.password]: ['', [Validators.required, Validators.minLength(10)]],
        [me.controlNames.confirmPassword]: ['']
      });
      result.push(formGroupItem);
    }
    return result;
  }

  public getFormArray(controlNames: string) {
    const me = this;
    return me.myFormGroupArray.get(controlNames) as FormArray;
  }

  public isInvalidControl(controlName: string): boolean | undefined {
    const me = this;
    const control = me.myForm.get(controlName);
    if (!control) {
      return false;
    }
    return control.invalid && (control.dirty || control.touched);
  }

  public getMsgErrorByKeyFirstWay(objectErrors: any) {
    if (!objectErrors) {
      return null;
    }
    const keys = Object.keys(objectErrors);
    for (const key of keys) {
      if (key === 'required') {
        return 'data dau con cho!';
      }
      if (key === 'minlength') {
        return 'thieu chu roi con dog!';
      }
    }
    return null;
  }

  public getMsgErrorByControlName(controlName: string): string {
    const me = this;
    const control = me.myForm.get(controlName);
    if (!control || !control.errors) {
      return '';
    }
    const keys = Object.keys(control.errors);
    const _msgKeys = me.msgKeys as any;
    for (const key of keys) {
      return _msgKeys[key];
    }
    return '';
  }
}
