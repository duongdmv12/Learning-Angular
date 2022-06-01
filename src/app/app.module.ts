import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ChartComponent } from './chart/chart.component';
import { FormComponent } from './form/form.component';
import { InnerMsgDirective } from './directives/inner-msg.directive';
// import { NativeElementInjectorDirective } from './native-element.directive';
import { NgModule } from '@angular/core';
import { ObservableComponent } from './observable/observable.component';

@NgModule({
  declarations: [
    AppComponent,
    InnerMsgDirective,
    ObservableComponent,
    ChartComponent,
    FormComponent
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
