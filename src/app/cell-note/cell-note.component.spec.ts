import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellNoteComponent } from './cell-note.component';

describe('CellNoteComponent', () => {
  let component: CellNoteComponent;
  let fixture: ComponentFixture<CellNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
