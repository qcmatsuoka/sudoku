import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Cell } from '../models/cell';
import { Mode } from '../models/mode';

@Component({
  selector: 'keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent implements OnInit {
  @Input() cell: Cell;
  
  constructor() { }

  ngOnInit() {
  }

  isInputMode(): boolean {
    return this.cell.getMode() === Mode.Input;
  }

  isNoteMode(): boolean {
    return this.cell.getMode() === Mode.Note;
  }

  setInputMode(): void {
    this.cell.setMode(Mode.Input);
  }

  setNoteMode(): void {
    this.cell.setMode(Mode.Note);
  }

  numberSelected(value: number): void {
    if (this.cell.hasNumber(value)) {
      this.cell.removeNumber(value);
    }

    this.cell.addNumber(value);
  }

  clear() {
    this.cell.clear();

    // TODO メモステートの時にクリアしたら入力ステートに切り替えるか？
    if (this.cell.getMode() === Mode.Input && this.cell.hasAnyNumber(Mode.Note)) {
      this.cell.setMode(Mode.Note);
    }
  }

  isActiveNumber(value: number): boolean {
    return this.cell.hasNumber(value);
  }

  isNoteNumber(value: number): boolean {
    return this.cell.hasNumber(value, Mode.Note);
  }
}
