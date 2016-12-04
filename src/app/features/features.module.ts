import { NgModule } from '@angular/core';

import { AppBarComponent } from './app-bar';
import { NotesComponent } from './notes';
import { NoteCardComponent } from './note-card';
import { NoteCreatorComponent } from './note-creator/note-creator.component';
import { SharedModule } from '../shared.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    AppBarComponent,
    NotesComponent,
    NoteCardComponent,
    NoteCreatorComponent,
    MainLayoutComponent
  ],
  exports: [
    AppBarComponent,
    NotesComponent,
    NoteCardComponent,
    NoteCreatorComponent,
    MainLayoutComponent
  ]
})
export class FeaturesModule { }
