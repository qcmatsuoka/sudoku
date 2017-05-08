import { Injectable } from '@angular/core';
import { Cell, factory } from '../models/cell';

@Injectable()
export class PuzzleRepository {
  get(): Cell[] {
    function random(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    return Array(8).fill(0).map((n: number, i: number) => {
      return factory(random(1, 9), random(1, 9), i + 1);
    });
  }
}
