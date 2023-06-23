import { Component } from '@angular/core';
import { Info } from 'src/app/core/info.model';
import { DataService } from 'src/app/core/service/data.service';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent {
  cardMonth: string = ''
  cardYear: string = ''
  carcCvc: string = ''
  cardNumber: string = ''
  cardHolderName: string = ''
  constructor(private dataService: DataService) { }

  ngOnInit(): void {

  }
  // cardholder name
  updateCardNumber() {
    this.dataService.setCardNumberData(this.cardNumber)
  }
}
