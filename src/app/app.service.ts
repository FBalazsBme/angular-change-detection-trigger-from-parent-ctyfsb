import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class AppService {
  dummyTrigger: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  dummyTriggerObservable: Observable<boolean>;

  constructor() {
    this.dummyTriggerObservable = this.dummyTrigger.asObservable();
  }

  InitiateDetection() {
    this.dummyTrigger.next(true);
  }
}