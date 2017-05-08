import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PuzzleRepository } from './repository/puzzle-repository';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { SheetComponent } from './sheet/sheet.component';
import { CellComponent } from './cell/cell.component';
import { CellLockedComponent } from './cell-locked/cell-locked.component';
import { KeypadComponent } from './keypad/keypad.component';
import { CellInputComponent } from './cell-input/cell-input.component';
import { CellNoteComponent } from './cell-note/cell-note.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    SheetComponent,
    CellComponent,
    CellLockedComponent,
    KeypadComponent,
    CellInputComponent,
    CellNoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    PuzzleRepository,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
