import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  constructor(private router: Router) {}

  @Input()
  heading: string;

  ngOnInit(): void {}

  logoutHandler() {
    localStorage.setItem('loggedIn', 'false');
    this.router.navigateByUrl('/login');
  }
}
