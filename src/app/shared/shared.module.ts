import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BaseComponent } from './components/base.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PhonePipe } from './pipes/phone.pipe';

const declarations: any[] = [
  PhonePipe,
  BaseComponent
];

const imports = [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule,];

@NgModule({
  imports: [
    ...imports
  ],
  declarations: [
    ...declarations
  ],
  exports: [
    ...imports,
    ...declarations
  ]
})
export class SharedModule { }
