import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AuthService } from './auth.service';
import { ApiService } from './api.service';
import { NotesService } from './notes.service';

@NgModule({
  imports: [
    HttpModule
  ],
  providers: [
    NotesService,
    ApiService,
    AuthService
  ]
})
export class CoreModule { }
