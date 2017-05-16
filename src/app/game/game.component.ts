import { Component, OnInit } from '@angular/core';
import { PuzzleRepository } from '../repository/puzzle-repository';
import { Cell } from '../models/cell';
import { Sheet, factory as sheetFactory } from '../models/sheet';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  private sheet: Sheet;

  static $inject = ['PuzzleRepository'];

  constructor(private puzzleRepository: PuzzleRepository) {}

  ngOnInit() {
    this.clear();
  }

  clear(): void {
    this.sheet = sheetFactory(9, 9);
  }

  gameNumbers(): number[] {
    return this.puzzleRepository.gameNumbers();
  };

  create(indexOfGame: number): void {
    this.clear();

    this.puzzleRepository.get(indexOfGame).forEach((cell: Cell) => {
      this.sheet.setCell(cell);
    });
  }
}
