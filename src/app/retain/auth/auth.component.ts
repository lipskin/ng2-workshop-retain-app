import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../core/auth.service';


export interface User {
  email: string;
  password: string;
}

@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  user: User = {
    email: '',
    password: ''
  };

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() { }

  authenticate() {
    this.authService.authenticate(this.user)
      .subscribe(() => this.router.navigate(['']));
  }
}
