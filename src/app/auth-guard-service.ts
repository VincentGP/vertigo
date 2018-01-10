import { Injectable } from '@angular/core';
import {
	CanActivate, Router,
	ActivatedRouteSnapshot,
	RouterStateSnapshot
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private authService: AuthService, private router: Router) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		// Save url for redirecting purposes
		let url: string = state.url;
		// Denne kan enten blive sand eller falsk baseret på om brugeren bliver logget ind eller ej
		return this.checkLogin(url);
	}

	checkLogin(url: string): boolean {
		if (this.authService.isLoggedIn) {
			return true; 
		} else {
			// Store the attempted URL for redirecting
			this.authService.redirectUrl = url;
			// Navigate to the login page with extras
			this.router.navigate(['/login']);
			return false;
		}
	}
}