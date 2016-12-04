import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    BrowserModule,
    FormsModule,
    RouterModule
  ],
})
export class SharedModule { }
