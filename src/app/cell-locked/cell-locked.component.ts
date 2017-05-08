import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cell-locked',
  templateUrl: './cell-locked.component.html',
  styleUrls: ['./cell-locked.component.css']
})
export class CellLockedComponent implements OnInit {
  @Input() number: number;

  constructor() { }

  ngOnInit() {
  }

}
