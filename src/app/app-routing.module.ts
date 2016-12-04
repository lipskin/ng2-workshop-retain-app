import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent, AboutComponent, AuthComponent } from './retain';
import { MainLayoutComponent } from './features';
import { AuthService } from './core/auth.service';

const routeConfig: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [ AuthService ],
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
    ],
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: '**',
    redirectTo: ''
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
