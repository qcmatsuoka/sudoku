import { Cell, factory as cellFactory } from './cell';

export interface Sheet {
  numberOfRow: number
  numberOfColumn: number
  cells: Cell[][]
  activeCell?: Cell
  setCell(cell: Cell): void
}

class SheetImpl {
  constructor(
    public numberOfRow: number,
    public numberOfColumn: number,
    public cells: Cell[][],
    public activeCell?: Cell
  ) {}

  getCell(row: number, column: number): Cell {
    return this.cells[row][column];
  }

  setCell(cell: Cell): void {
    if (this.numberOfRow < cell.row) {
      throw new Error(`Sheet has ${this.numberOfRow} rows. Can't set cell at ${cell.row}.`);
    }
    if (this.numberOfColumn < cell.column) {
      throw new Error(`Sheet has ${this.numberOfColumn} columns. Can't set cell at ${cell.column}.`);
    }
    this.cells[cell.row][cell.column] = cell;
  }
}

export function factory(numberOfRow: number, numberOfColumn: number) {
  let cells = [];

  Array(numberOfRow).fill(0).forEach((value, row: number) => {
    cells[row] = [];
    Array(numberOfColumn).fill(0).forEach((value, column: number) => {
      cells[row][column] = cellFactory(row, column);
    });
  });

  return new SheetImpl(numberOfRow, numberOfColumn, cells);
}
