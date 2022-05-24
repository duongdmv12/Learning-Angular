import { BaseComponent } from 'src/app/shared/components/base.component';
import { Component } from '@angular/core';
import { DoctorModel } from 'src/app/shared/models/doctor.model';
import { DoctorService } from 'src/app/shared/services/doctor.service';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss'],
  providers: []
})
export class DoctorsComponent extends BaseComponent {


  public items: DoctorModel.DoctorInfo[] = [];


  constructor(private doctorService: DoctorService) {
    super();
  }

  ngOnInit() {
    const me = this;
    // me.getDoctors();
  }

  onDestroy(): void {
  }

  private getDoctors(): void {
    const me = this;
    me.doctorService.getDoctors().pipe(takeUntil(me.destroy$)).subscribe(
      res => {
        ///
      }
    );

  }
}
