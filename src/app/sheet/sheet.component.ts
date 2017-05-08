import { Component, OnInit, Input } from '@angular/core';
import { Cell } from '../models/cell';
import { Sheet } from '../models/sheet';

@Component({
  selector: 'sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})
export class SheetComponent implements OnInit {
  @Input() sheet: Sheet;

  constructor() { }

  ngOnInit() {
  }

  select($event: SelectEventArgs) {
    this.sheet.activeCell = $event.cell;
  }
}

interface SelectEventArgs {
  cell: Cell
}
