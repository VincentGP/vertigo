import { Injectable } from "@angular/core";
import { Movie } from './movie';
import { HttpClient } from "@angular/common/http/";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

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
            { responseType: 'text' }) // This api sends back text.
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

    public getMovie(id: string): Movie {
        return this.movies.find(x => x._id === id);
    }
}