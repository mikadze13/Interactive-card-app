import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/data.service';

@Component({
  selector: 'app-card-decoration',
  templateUrl: './card-decoration.component.html',
  styleUrls: ['./card-decoration.component.css']
})
export class CardDecorationComponent implements OnInit{
  sharedData:string = ''
  constructor(private dataService:DataService){}

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.sharedData = data;
    });
  }
}
