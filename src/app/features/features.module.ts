import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppBarComponent } from './app-bar';
import { NotesComponent } from './notes';
import { NoteCardComponent } from './note-card';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AppBarComponent,
    NotesComponent,
    NoteCardComponent
  ],
  exports: [
    AppBarComponent,
    NotesComponent,
    NoteCardComponent
  ]
})
export class FeaturesModule { }
