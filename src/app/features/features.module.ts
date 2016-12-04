import { NgModule } from '@angular/core';

import { AppBarComponent } from './app-bar';
import { NotesComponent } from './notes';
import { NoteCardComponent } from './note-card';
import { NoteCreatorComponent } from './note-creator/note-creator.component';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    SharedModule
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
