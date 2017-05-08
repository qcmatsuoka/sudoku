import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, SimpleChange } from '@angular/core';
import { Cell } from '../models/cell';
import { Mode } from '../models/mode';

@Component({
  selector: 'cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  @Input() cell: Cell;
  @Input() row: number;
  @Input() column: number;
  @Output() onSelect = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  isLocked(): boolean {
    return this.cell.getMode() === Mode.Locked;
  }

  isInput(): boolean {
    return this.cell.getMode() === Mode.Input;
  }

  isNote(): boolean {
    return this.cell.getMode() === Mode.Note;
  }

  select(): void {
    this.onSelect.emit({cell: this.cell});
  }
}
