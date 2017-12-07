import { Injectable } from "@angular/core";
import { Movie } from './movie';
import { HttpClient } from "@angular/common/http/";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import 'rxjs/add/operator/map'

@Injectable()
export class DataService {

    public movies: Movie[];

    constructor(private http: HttpClient) {

    }
    // Get all movies and filter by the customerId 24
    public getMovies(): Observable<Movie[]> {
        let url = 'http://angular2api1.azurewebsites.net/api/internships/getall';
        return this.http.get(url).pipe(
            map((data: any[]) => {
                this.movies = data.filter(x => x.customerId === '24');
                return this.movies;
            }));
    }

    public createMovie(movie: Movie) {
        this.http.post('http://angular2api1.azurewebsites.net/api/internships/create', movie,
            { responseType: 'text' })
            .subscribe(data => {
                console.log(data);
            })
    }

    public deleteMovie(movie: Movie) {
        let url = 'http://angular2api1.azurewebsites.net/api/internships/delete/';
        this.http.post(url + movie._id, movie, { responseType: 'text' }).subscribe(data => {
            console.log(data);
        });
    }

    public getMovie(id: string): Observable<Movie> {
        // Find filmen baseret på id, skal eventuelt laves om da det måske ikke er sikkert der altid er noget i this.movies 
        return this.getMovies().map(data => {
            console.log(data);
            return data.find(x => x._id === id);
        });  
    }

    public updateMovie(movie: Movie) {
        let url = 'http://angular2api1.azurewebsites.net/api/internships/update/';
        this.http.post(url + movie._id, movie, { responseType: 'text' }).subscribe(status => {
            return status;
        });
    }
}