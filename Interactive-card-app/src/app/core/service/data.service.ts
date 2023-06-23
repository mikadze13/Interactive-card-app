import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private cardNumberSubject = new BehaviorSubject<string>('');
  private CardHolderSubject = new BehaviorSubject<string>('');
  private CardMonthSubject = new BehaviorSubject<string>('');
  private CardYearsubject = new BehaviorSubject<string>('');
  private CardCvcSubject = new BehaviorSubject<string>('');
  constructor() { }

  // set Card holder data
  setCardHolderName(data: string) {
    this.CardHolderSubject.next(data)
  }
  // get Card holder data
  getCardHolderName() {
    return this.cardNumberSubject.asObservable()
  }


  //  set  Card Number data
  setCardNumberData(data: string) {
    this.cardNumberSubject.next(data);
  }
  // get Card Number Data  
  getCardNumberData() {
    return this.cardNumberSubject.asObservable();
  }


  // set Card month data
  setCardMonthData(data: string) {
    this.CardMonthSubject.next(data)
  }
  // get Card month data
  getCardMonthData() {
    return this.CardMonthSubject.asObservable()
  }


  // set Card year data
  setCardYearData(data: string) {
    this.CardYearsubject.next(data)
  }
  // get Card year data
  getCardYearData() {
    return this.CardYearsubject.asObservable()
  }


  // set Card CVC data
  setCardCvcData(data: string) {
    this.CardCvcSubject.next(data)
  }
  // get Card CVC data
  getCardCvcData() {
    return this.CardCvcSubject.asObservable()
  }
}
