import { Component } from '@angular/core';
import { DataService } from 'src/app/core/data.service';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent {
 
  data: string = ''
  constructor(private dataService: DataService) { }

  ngOnInit(): void {

  }
  
  
  // card number data
  updateCardNumber() {
    this.dataService.setData(this.data);
  }
  
}
