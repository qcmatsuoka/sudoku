import { Injectable } from '@angular/core';
import { Cell, factory } from '../models/cell';
import { problems } from '../problems';

@Injectable()
export class PuzzleRepository {
  get(): Cell[] {
    // TODO 問題の番号を指定できるように
    return this.flatten(problems[0]).map((n: number, i: number) => {
      return factory(Math.floor(i / 9), i % 9, n);
    });
  }

  private flatten(numbers: number[][]): number[] {
    return [].concat.apply([], numbers);
  }
}
