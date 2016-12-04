import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { toPairs } from 'lodash';

import { environment } from '../../environments/environment';


@Injectable()
export class ApiService {
  apiUrl: string = environment.apiUrl;
  headers: Headers = new Headers();

  constructor(private http: Http) {}

  get(path: string) {
    return this.http.get(`${this.apiUrl}${path}`, { headers: this.headers});
  }

  post(path: string, data) {
    return this.http.post(`${this.apiUrl}${path}`, data, { headers: this.headers});
  }

  delete(path: string) {
    return this.http.delete(`${this.apiUrl}${path}`, { headers: this.headers});
  }

  setHeaders(headers: { [key: string]: string }) {
    toPairs(headers).forEach(([key, value]) => this.headers.set(key, value));
  }
}
