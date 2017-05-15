import { Mode } from './mode';

export interface Cell {
  row: number
  column: number
  lockedNumber?: number 
  inputNumber?: number
  noteNumbers?: number[]
  getMode(): Mode
  setMode(mode: Mode): void
  hasNumber(value: number, mode?: Mode): boolean
  addNumber(value: number, mode?: Mode): void
  removeNumber(value: number, mode?: Mode): void
  hasAnyNumber(mode: Mode): boolean|never
  clear(mode?: Mode): void
}

class CellImpl implements Cell {
  private mode?: Mode;

  constructor(
    public row: number,
    public column: number,
    public lockedNumber?: number,
    public inputNumber?: number,
    public noteNumbers?: number[]
  ) {}

  getMode(): Mode {
    if (this.lockedNumber) {
      return Mode.Locked;
    }

    return this.mode || Mode.Input;
  }

  setMode(mode: Mode): void {
    this.mode = mode;
  }

  /**
   * switch文でModeが全て列挙されていない場合に、コンパイルエラーを発生させる
   * @param {Mode} mode
   */
  assertNever(mode: never): never {
    throw new Error(`Unexpected mode: ${mode}`);
  }

  hasNumber(value: number, mode?: Mode): boolean|never {
    const m = mode || this.getMode();

    switch (m) {
      case Mode.Input:
        return this.inputNumber === value;
      case Mode.Note:
        return this.noteNumbers.indexOf(value) !== -1;
      case Mode.Locked:
        return this.inputNumber === value;
      default:
        this.assertNever(m);
    }
  }

  hasAnyNumber(mode: Mode): boolean|never {
    switch (mode) {
      case Mode.Input:
        return !!this.inputNumber;
      case Mode.Note:
        return this.noteNumbers.length > 0;
      case Mode.Locked:
        return !!this.lockedNumber;
      default:
        return this.assertNever(mode);
    }
  }

  addNumber(value: number, mode?: Mode): void {
    switch (mode || this.getMode()) {
      case Mode.Input: 
        this.inputNumber = value;
        break;
      case Mode.Note: 
        if (!this.hasNumber(value, Mode.Note)) {
          this.noteNumbers.push(value);
          this.noteNumbers.sort();
        }
        break;
      default: 
        // TODO enumを全列挙していない時に自動的に例外になった気がする
        throw new Error(`Not supported mode [${mode}]`);
    }
  }

  removeNumber(value: number, mode?: Mode): void {
    switch (mode || this.getMode()) {
      case Mode.Input: 
        this.inputNumber = null;
        break;
      case Mode.Note: 
        if (this.hasNumber(value, Mode.Note)) {
          this.noteNumbers.splice(this.noteNumbers.indexOf(value), 1);
        }
        break;
      default: 
        // TODO enumを全列挙していない時に自動的に例外になった気がする
        throw new Error(`Not supported mode [${mode}]`);
    }
  }

  clear(mode?: Mode): void {
    const m = mode || this.getMode();

    switch (m) {
      case Mode.Input:
        this.inputNumber = null;
        break;
      case Mode.Note:
        this.noteNumbers = [];
        break;
      case Mode.Locked:
        this.lockedNumber = null;
        break;
      default:
        this.assertNever(m);
    }
  }
}

export function factory(
  row: number,
  column: number,
  lockedNumber?: number,
  inputNumber?: number,
  noteNumbers?: number[]
): Cell {
  return new CellImpl(
    row,
    column,
    lockedNumber || null,
    inputNumber || null,
    noteNumbers || []
  );
}
