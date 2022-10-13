import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter = new BehaviorSubject(0);
  counterVal = this.counter.asObservable();
  constructor() { }
  setCounter(value : number){
    this.counter.next(value)
  }
}
