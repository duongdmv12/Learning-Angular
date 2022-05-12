import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    ///
  ]
})
export class AppComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();

  messageErrors: any = {
    required: 'con cho dien du lieu vao',
    minlength: 'min length'
  };

  public fieldNameKeys = {
    username: 'username',
    password: 'password',
    confirmPassword: 'confirmPassword'
  };

  public formGroup!: FormGroup;

  constructor(private builder: FormBuilder) {

  }
  ngOnDestroy(): void {
    const me = this;
    me.destroy$.next();
    me.destroy$.complete();
  }

  ngOnInit(): void {
    const me = this;
    me.buildForm();
  }

  private buildForm() {
    const me = this;
    me.formGroup = me.builder.group(
      {
        [me.fieldNameKeys.username]: [{
          value: '',
          disabled: false
        }, [
          Validators.required,
          Validators.minLength(2)
        ]],
        password: ['', [Validators.required, me.validateMatchingPassword(me.fieldNameKeys)]],
        confirmPassword: ['', [Validators.required, me.validateMatchingPassword(me.fieldNameKeys)]]
      }
    );
  }

  validate (control: AbstractControl) {
    return {
      abc: true
    }
    return null;
  }

  private validateMatchingPassword(fieldNameKeys: any) {
    return (control: AbstractControl) => {
      if (!!control.parent?.controls) {
        const _formGroup = control.parent as FormGroup;
        const passwordControl = _formGroup.get(fieldNameKeys.password);
        const confirmPasswordControl = _formGroup.get(fieldNameKeys.confirmPassword);
        if (!!passwordControl?.value && !!confirmPasswordControl?.value && passwordControl?.value !== confirmPasswordControl?.value) {
          return {
            match: true
          };
        }
      }
      return null;
    }
  }

  public getErrorByField(controlName: string): string[] {
    const me = this;
    const errorObj = me.formGroup.get(controlName)?.errors;
    if (!errorObj) {
      return [];
    }
    const errorKeys = Object.keys(errorObj || {});
    if (errorKeys.length === 0) {
      return [];
    }
    const listMsg = errorKeys.reduce(
      (res: string[], key: string) => {
        const msg = me.messageErrors[key];
        res.push(msg);
        return res;
      }, []
    );
    // get message
    return listMsg;
  };

  public isInvalidControl(controlName: string) {
    const me = this;
    const control = me.formGroup.get(controlName);
    if (!control) {
      return false;
    }
    return control.invalid && (control.touched || control.dirty);
  }

  public onSubmit() {
    const me = this;
    // check valid form
    const isValid = me.formGroup.valid;
    if (!isValid) {
      // show message invalid form
      return;
    }
    // do something
    // call request api
    // 1. why we use getRawValue ?
    // Retrieves all values regardless of disabled status. The value property is the best way to get the value of the group, because it excludes disabled controls in the FormGroup.
    const valueForm = me.formGroup.getRawValue();


    // 2. Usally use formGroup.value
    const valueForm2 = me.formGroup.value;

    // we should use getRawValue
  }

  // sample use destroy
  private useDestroy(): void {
    const me = this;
    me.formGroup.valueChanges.pipe(
      takeUntil(me.destroy$)
    ).subscribe(

    );
  }
}
