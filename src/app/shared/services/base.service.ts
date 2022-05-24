import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface OptionsRequest {
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  context?: HttpContext;
  observe?: 'body';
  params?: HttpParams | {
    [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
  };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}

export abstract class BaseService {

  constructor(public httpClient: HttpClient) {
  }

  /**
   * Request server with method get
   * @param uri /sample1/abc...
   * @returns Observable<TResult>
   */
  protected get<TResult>(uri: string): Observable<TResult> {
    const me = this;
    const url = me.getUrl(uri);
    return me.httpClient.get<TResult>(url);
  }

  /**
   * Request server with method post
   * @param uri /sample1/abc...
   * @param request request body params
   * @param options request options
   * @returns Observable<TResult>
   */
  protected post<TResult, TRequest>(uri: string, request: TRequest, options?: OptionsRequest): Observable<TResult> {
    const me = this;
    const url = me.getUrl(uri);
    return me.httpClient.post<TResult>(url, request, options);
  }

  /**
   * Request server with put method
   * @param uri /sample1/abc...
   * @param request request body params
   * @param options request options
   * @returns Observable<TResult>
   */
  protected put<TResult, TRequest>(uri: string, request: TRequest, options?: OptionsRequest): Observable<TResult> {
    const me = this;
    const url = me.getUrl(uri);
    return me.httpClient.put<TResult>(url, request, options);
  }

  /**
   * Request server with delete method
   * @param uri /sample1/abc...
   * @param options request options
   * @returns Observable<TResult>
   */
  protected delete<TResult>(uri: string, options?: OptionsRequest): Observable<TResult> {
    const me = this;
    const url = me.getUrl(uri);
    return me.httpClient.delete<TResult>(url, options);
  }

  /**
   * Convert keys value of Object to Request Params
   * @example
   * const ob = {
   *         key1: 'value1',
   *         key2: 'value2'
   * };
   * const result = 'key1=value1&keys2=value2';
   * @param ob Object convert key values to string
   * @returns value as string
   */
  protected objectToRequestParams<TObject extends object>(ob: TObject): string {
    const keys = Object.keys(ob) as Array<keyof TObject>;
    const queries = [];
    for (const key of keys) {
      const value = ob[key];
      if (!!value) {
        queries.push(value);
      }
    }
    return queries.length > 0 ? queries.join('&') : '';
  }

  private getUrl(uri: string): string {
    return environment.baseUrl + '/' + uri;
  }
}
