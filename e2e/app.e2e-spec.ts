import { SudokuPage } from './app.po';

describe('sudoku App', () => {
  let page: SudokuPage;

  beforeEach(() => {
    page = new SudokuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
