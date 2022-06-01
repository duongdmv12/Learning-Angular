import { BehaviorSubject, Subject, debounceTime, distinctUntilChanged, switchMap, takeUntil } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  public searchInfo = {
    input: ''
  };

  private debouceTimeSearch = 400;

  private search$ = new BehaviorSubject<string>('');

  private destroy$ = new Subject<void>();

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    const me = this;
    me.regisSearchEvent();
  }

  private regisSearchEvent(): void {
    const me = this;
    me.search$.pipe(
      takeUntil(me.destroy$),
      distinctUntilChanged(),
      debounceTime(me.debouceTimeSearch),
      switchMap(keyword => {
        return me.searchService.search(keyword);
      })).subscribe(
      );
  }

  public onChangeSearchInput(): void {
    const me = this;
    me.search$.next(me.searchInfo.input);
  }

}
