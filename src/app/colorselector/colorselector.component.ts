import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-colorselector',
  templateUrl: './colorselector.component.html',
  styleUrls: ['./colorselector.component.css']
})
export class ColorselectorComponent implements OnInit {
  @Input('masterTrial') trial: number =0;
  @Output() colorChosenRequest  = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  clickedColor(selected: string){
    this.colorChosenRequest.emit(selected);
  }

}
