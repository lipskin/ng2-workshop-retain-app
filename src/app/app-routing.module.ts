import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './retain';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routeConfig)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
