import { Injectable } from '@angular/core';
import { Cell, factory } from '../models/cell';
import { problems } from '../problems';

@Injectable()
export class PuzzleRepository {
  get(gameNumber: number): Cell[] {
    return this.flatten(problems[gameNumber - 1]).map((n: number, i: number) => {
      return factory(Math.floor(i / 9), i % 9, n);
    });
  }

  gameNumbers(): number[] {
    return Array(problems.length).fill(0).map((n, i) => i + 1);
  }

  private flatten(numbers: number[][]): number[] {
    return [].concat.apply([], numbers);
  }
}
