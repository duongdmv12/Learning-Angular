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
    const seft = this;
    seft.destroy$.next();
    seft.destroy$.complete();
  }

  ngOnInit(): void {
    const seft = this;
    seft.buildForm();
  }

  private buildForm() {
    const seft = this;
    seft.formGroup = seft.builder.group(
      {
        [seft.fieldNameKeys.username]: [{
          value: '',
          disabled: false
        }, [
          Validators.required,
          Validators.minLength(2)
        ]],
        password: ['', [Validators.required, seft.validateMarchingPassword(seft.fieldNameKeys)]],
        confirmPassword: ['', [Validators.required, seft.validateMarchingPassword(seft.fieldNameKeys)]]
      }
    );
  }

  validate (control: AbstractControl) {
    return {
      abc: true
    }
    return null;
  }

  private validateMarchingPassword(fieldNameKeys: any) {
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

  public getErrorField(fieldName: string): string[] {
    const seft = this;
    const errorObj = seft.formGroup.get(fieldName)?.errors;
    if (!errorObj) {
      return [];
    }
    const errorKeys = Object.keys(errorObj || {});
    if (errorKeys.length === 0) {
      return [];
    }
    const listMsg = errorKeys.reduce(
      (res: string[], key: string) => {
        const msg = seft.messageErrors[key];
        res.push(msg);
        return res;
      }, []
    );
    // get message
    return listMsg;
  };

  public isInvalidControl(controlName: string) {
    const seft = this;
    const control = seft.formGroup.get(controlName);
    if (!control) {
      return false;
    }
    return control.invalid && (control.touched || control.dirty);
  }

  public onSubmit() {
    const seft = this;
    seft.formGroup.valueChanges.pipe(
      takeUntil(seft.destroy$)
    ).subscribe(

    )
  }
}
