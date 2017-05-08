import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cell-note',
  templateUrl: './cell-note.component.html',
  styleUrls: ['./cell-note.component.css']
})
export class CellNoteComponent implements OnInit {
  @Input() numbers: number;

  constructor() { }

  ngOnInit() {
  }

}
