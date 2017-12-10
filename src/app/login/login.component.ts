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

  public username: string;
  public password: string;

  isLoading: boolean = false;

  constructor(public authService: AuthService, public router: Router) { }

  login() {
    this.isLoading = true;
    this.authService.login(this.username, this.password).subscribe(() => {
      if (this.authService.isLoggedIn) {
        this.isLoading = false;
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';

        // Redirect the user
        this.router.navigate([redirect]);
      } else {
        this.isLoading = false;
        alert('The email or password was wrong. Please try again!');
      }
    });
  }

  logout() {
    this.authService.logout();
  }

  public hint(): void {
    alert('Email: \'admin\' Password: \'admin\'');
  }
}