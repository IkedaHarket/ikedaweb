import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pick-color',
  templateUrl: './pick-color.component.html',
  styleUrls: ['./pick-color.component.scss']
})
export class PickColorComponent {

  @ViewChild('input') input!: ElementRef<HTMLInputElement>;

  @Output() color = new EventEmitter<string>()

  handlerClick(){
    this.input.nativeElement.click();
  }

  changeColor(){
    this.color.emit(this.input.nativeElement.value)
  }
}
