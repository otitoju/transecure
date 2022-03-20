import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  focusedEmail: boolean = false;
  focusedPassword: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBlur(event: any) {
    const value = event.target.value;

    if(!value) {
      this.focusedEmail = false;
    }
  }

  onBlurPassword(event: any) {
    const value = event.target.value;

    if(!value) {
      this.focusedPassword = false;
    }
  }

  dashboard() {
    this.router.navigateByUrl('/dashboard');
  }

}
