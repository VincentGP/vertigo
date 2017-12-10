import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
	
	isLoggedIn = false;
	// Store the URL so we can redirect after logging in
	redirectUrl: string;

	login(email: string, password: string): Observable<boolean> {
		if (email == "admin" && password == "admin") {
			// If the values matches return true
			return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
		} else {
			// If the value don't match return false
			return Observable.of(true).delay(1000).do(val => this.isLoggedIn = false);
		}
	}

	logout(): void {
		this.isLoggedIn = false;
	}
}