import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSubject = new BehaviorSubject<[string, string, string, string, string]>(['', '', '', '', '']);
  constructor() { }

  //  set data
  setData(data: [string, string, string, string, string]) {
    this.dataSubject.next(data);
  }
  // get Data
  getData() {
    return this.dataSubject.asObservable();
  }
}
