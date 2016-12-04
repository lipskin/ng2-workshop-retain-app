import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'rt-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css']
})
export class AppBarComponent implements OnInit {
  constructor(private authService: AuthService) { }

  ngOnInit() { }

  signOut() {
    this.authService.signOut();
  }
}
