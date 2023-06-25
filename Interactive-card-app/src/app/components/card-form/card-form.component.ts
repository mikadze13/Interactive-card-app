import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/core/service/data.service';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent {
  @Output() newItemEvent = new EventEmitter<any>();
  cardMonth: string = ''
  cardYear: string = ''
  carcCvc: string = ''
  cardNumber: string = ''
  cardHolderName: string = ''

  formData = {
    name: '',
    number: '',
    mm: '',
    yy: '',
    cvc: ''
  };
  constructor(private dataService: DataService) { }

  ngOnInit(): void {

  }

  // update card Holder name
  updateCardHolderName() {
    this.dataService.setCardHolderName(this.cardHolderName)
  }

  // update cardNumber name
  updateCardNumber() {
    this.dataService.setCardNumberData(this.cardNumber)
  }

  // update Month data
  updateMonthData() {
    this.dataService.setCardMonthData(this.cardMonth)
  }

  // update year data
  updateYearData() {
    this.dataService.setCardYearData(this.cardYear)
  }

  // update CVC number
  updateCvcData() {
    this.dataService.setCardCvcData(this.carcCvc)
  }

  onCardForm(formData: any) { 
    this.newItemEvent.emit(formData);
  }

}
