import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Response } from '@angular/http';

import { ApiService } from './api.service';

@Injectable()
export class AuthService implements CanActivate {
  JWT_KEY: string = 'retain_token';

  constructor(private apiService: ApiService,private router: Router) { }

  signOut(): void {
    localStorage.removeItem(this.JWT_KEY);
    this.router.navigate(['auth']);
  }

  setJWT(jwt: string): void {
    localStorage.setItem(this.JWT_KEY, jwt);
    this.apiService.setHeaders({
        'Authorization': `Bearer ${jwt}`
    });
  }

  authenticate(creds: any): Observable<any> {
    return this.apiService.post(`/auth`, creds)
      .map((res: Response) => res.json())
      .do(res => this.setJWT(res.token));
  }

  isAuthorized(): boolean {
    return !!localStorage.getItem(this.JWT_KEY);
  }

  canActivate(): boolean {
    const isAuth = this.isAuthorized();

    if (!isAuth) {
      this.router.navigate(['auth']);
    }

    return isAuth;
  }
}
