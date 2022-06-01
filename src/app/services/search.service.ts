import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public search(keyword: string): Observable<string> {
    return of(keyword);
  }
}
