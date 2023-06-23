import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/service/data.service';

@Component({
  selector: 'app-card-decoration',
  templateUrl: './card-decoration.component.html',
  styleUrls: ['./card-decoration.component.css']
})
export class CardDecorationComponent implements OnInit {

  cardHolderName: string = ''
  cardNumber: string = ''
  cardMonth: string = ''
  cardYear: string = ''
  cardCvc: string = ''
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCardHolderName().subscribe(data => {
      this.cardHolderName = data;
    });

    this.dataService.getCardNumberData().subscribe(data => {
      this.cardNumber = data
    })

    this.dataService.getCardMonthData().subscribe(data => {
      this.cardMonth = data
    })

    this.dataService.getCardYearData().subscribe(data => {
      this.cardYear = data
    })

    this.dataService.getCardCvcData().subscribe(data => {
      this.cardCvc = data
    })
  }


}
