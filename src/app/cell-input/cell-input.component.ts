import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cell-input',
  templateUrl: './cell-input.component.html',
  styleUrls: ['./cell-input.component.css']
})
export class CellInputComponent implements OnInit {
  @Input() number: number;

  constructor() { }

  ngOnInit() {
  }

}
