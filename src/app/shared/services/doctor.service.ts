import { BaseService } from './base.service';
import { DoctorRequest } from '../models/request/doctor.request';
import { DoctorResponse } from './../models/response/doctor.response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DoctorService extends BaseService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  public getDoctors(): Observable<DoctorResponse.GetDoctors> {
    const me = this;
    const uri = '/api/doctors';
    return me.get(uri);
  }

  public createDoctor(request: DoctorRequest.CreateDoctor): Observable<DoctorResponse.CreateDoctor> {
    const me = this;
    const uri = '/api/doctors';
    return me.post(uri, request);
  }
}


