import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth-guard-service';
import { MovieComponent } from './movie/movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{
		path: 'movies',
		component: MovieListComponent,
	},
	{
		path: 'movies/:id',
		component: MovieComponent,
	},
	{
		path: 'movies/:id/:edit',
		component: MovieComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'admin',
		component: AdminComponent,
		canActivate: [AuthGuard]
	},
	{ path: 'login', component: LoginComponent },
	{ path: '', redirectTo: '/movies', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(
			appRoutes,
			{ enableTracing: false } // <-- debugging purposes only
		)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }