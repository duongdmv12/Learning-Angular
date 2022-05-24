import { AppConstant } from '../utilities/app.constant';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  public getToken(): string | null {
    return localStorage.getItem(AppConstant.TOKEN_KEY);
  }
}
