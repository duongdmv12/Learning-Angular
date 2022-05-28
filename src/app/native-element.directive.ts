import { Directive, ElementRef, OnInit, Optional } from "@angular/core";
import { NgControl, NgModel } from "@angular/forms";

@Directive({
  selector: '[ngModel], [formControl], [formControlName]', // or 'input, select, textarea' - but then your controls won't be handled and also checking for undefined would be necessary
})
export class NativeElementInjectorDirective implements OnInit {
  constructor(private el: ElementRef, private control: NgControl, @Optional() private model: NgModel) {
    if (!!model)
      (<any>model.control)['nativeElement'] = el.nativeElement;
    else
      (<any>control)['nativeElement'] = el.nativeElement;
      console.log((<any>control).nativeElement);
  }

  ngOnInit() {
    (this.control.control as any).nativeElement = this.el.nativeElement;
  }
}
