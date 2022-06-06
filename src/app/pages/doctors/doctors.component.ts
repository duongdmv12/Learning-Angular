import { AfterViewInit, Component } from '@angular/core';

import { BaseComponent } from 'src/app/shared/components/base.component';
import { DoctorModel } from 'src/app/shared/models/doctor.model';
import { DoctorService } from 'src/app/shared/services/doctor.service';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss'],
  providers: []
})
export class DoctorsComponent extends BaseComponent implements AfterViewInit {


  public items: DoctorModel.DoctorInfo[] = [];


  constructor(private doctorService: DoctorService, private router: Router) {
    super();
  }

  ngOnInit() {
  }

  onDestroy(): void {
  }

  ngAfterViewInit(): void {
    const me = this;
    me.getDoctors();
  }

  private getDoctors(): void {
    const me = this;
    me.doctorService.getDoctors().pipe(takeUntil(me.destroy$)).subscribe(
      res => {
        me.items = [...res as any];
      }
    );

  }

  public onAdd(): void {
    const me = this;
    me.router.navigate(['doctors', 'create'])
  }
}
