import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class LoginComponent {
  // Used for displaying status
  message: string;

  loader: boolean = false;

  constructor(public authService: AuthService, public router: Router) { }

  login() {
    this.loader = true;
    this.authService.login().subscribe(() => {
      if (this.authService.isLoggedIn) {
        this.loader = false;
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';

        // Redirect the user
        this.router.navigate([redirect]);
      }
    });
  }

  logout() {
    this.authService.logout();
  }
}