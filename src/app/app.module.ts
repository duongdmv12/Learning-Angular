import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { InnerMsgDirective } from './inner-msg.directive';
// import { NativeElementInjectorDirective } from './native-element.directive';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    InnerMsgDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
