import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interactive-card-app';
  @ViewChild('styledDiv', { static: true })
  styledDiv!: ElementRef;
  @Input() event:any;

  constructor(private renderer: Renderer2) { }
  
  eventData(updatedData: any) {
    console.log("click")
    const divElement = this.styledDiv.nativeElement;
    this.renderer.setStyle(divElement, 'background-size','100%')
    this.renderer.setStyle(divElement,'transition','.7s cubic-bezier(.36,.07,.19,.97) both;')
  }

}
