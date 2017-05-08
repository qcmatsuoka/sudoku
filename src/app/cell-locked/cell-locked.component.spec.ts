import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellLockedComponent } from './cell-locked.component';

describe('CellLockedComponent', () => {
  let component: CellLockedComponent;
  let fixture: ComponentFixture<CellLockedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellLockedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellLockedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
