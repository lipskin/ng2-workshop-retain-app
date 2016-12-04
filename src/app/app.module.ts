import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent, AppBarComponent, NotesComponent, NoteCardComponent } from './retain';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppBarComponent,
    NotesComponent,
    NoteCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
