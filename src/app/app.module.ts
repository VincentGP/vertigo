import { MovieRatingComponent } from './movie-rating/movie-rating.component';
import { AuthGuard } from './auth-guard-service';
import { AuthService } from './auth.service';
import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavigationComponent } from './ui/navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './ui/footer/footer.component';
import { MovieComponent } from './movie/movie.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
    children: [
      { path: 'rating', component: MovieRatingComponent }
    ] 
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
  declarations: [
    AppComponent,
    LoadingSpinnerComponent,
    MovieListComponent,
    PageNotFoundComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    MovieComponent,
    AdminComponent,
    LoginComponent,
    MovieRatingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    HttpClientModule
  ],
  providers: [
    DataService,
    AuthService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
