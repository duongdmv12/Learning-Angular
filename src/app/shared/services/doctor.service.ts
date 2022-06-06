import { BaseService } from './base.service';
import { DoctorRequest } from '../models/request/doctor.request';
import { DoctorResponse } from './../models/response/doctor.response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class DoctorService extends BaseService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  public getDoctors(): Observable<DoctorResponse.GetDoctors> {
    const me = this;
    if (environment.mockApi) {
      const url = 'assets/data/doctors.json';
      return me.httpClient.get<DoctorResponse.GetDoctors>(url);
    } else {
      const uri = '/api/doctors';
      return me.get(uri);
    }
  }

  public createDoctor(request: DoctorRequest.CreateDoctor): Observable<DoctorResponse.CreateDoctor> {
    const me = this;
    const uri = '/api/doctors';
    return me.post(uri, request);
  }
}


