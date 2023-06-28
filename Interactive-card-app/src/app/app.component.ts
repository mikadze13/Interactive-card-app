import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interactive-card-app';
  viewThanksCard: boolean = true;
  viewForm: boolean = false;
  @ViewChild('styledDiv', { static: true })
  styledDiv!: ElementRef;
  @Input() event: any;

  constructor(private renderer: Renderer2) { }

  eventData(updatedData: any) {
    this.viewThanksCard = true;
    this.viewForm = false;

  }
  
  continue() {
    this.viewThanksCard = false;
    this.viewForm = true
  }

}
