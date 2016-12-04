import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppBarComponent } from './app-bar';
import { NotesComponent } from './notes';
import { NoteCardComponent } from './note-card';
import { NoteCreatorComponent } from './note-creator/note-creator.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    AppBarComponent,
    NotesComponent,
    NoteCardComponent,
    NoteCreatorComponent
  ],
  exports: [
    AppBarComponent,
    NotesComponent,
    NoteCardComponent,
    NoteCreatorComponent
  ]
})
export class FeaturesModule { }
