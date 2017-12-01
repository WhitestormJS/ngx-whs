import { Injectable, Injector } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { Event } from './event';

@Injectable()
export class StateService {

  event$ = new Subject();


  constructor() {}

  data = [];
  on<T>(name: symbol, fn: (data: T) => any): Subscription  {
    return this.event$
      .filter((data: Event<T>) => data.name === name)
      .map((data: Event<T>) => data.data)
      .subscribe(data => fn(data));
  }

  trigger(name: symbol, data) {
    this.event$.next({
      name,
      data
    });
  }

  off() {
    this.event$.unsubscribe();
  }

}
