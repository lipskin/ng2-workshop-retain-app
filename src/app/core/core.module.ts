import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { NotesService } from './notes.service';

@NgModule({
  imports: [
    HttpModule
  ],
  providers: [
    NotesService
  ]
})
export class CoreModule { }
