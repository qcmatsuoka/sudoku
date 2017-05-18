import { Injectable } from '@angular/core';
import { Cell, factory } from '../models/cell';
import { problems } from '../problems';

@Injectable()
export class PuzzleRepository {
  get(indexOfGame: number): Cell[] {
    return this.flatten(problems[indexOfGame]).map((n: number, i: number) => {
      return factory(Math.floor(i / 9), i % 9, n);
    });
  }

  gameIndexes(): number[] {
    return Array(problems.length).fill(0).map((n, i) => i);
  }

  private flatten(numbers: number[][]): number[] {
    return [].concat.apply([], numbers);
  }
}
