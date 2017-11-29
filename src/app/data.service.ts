import { Injectable } from "@angular/core";
import { Movie } from './movie';
// import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
    movies = [
        { id: 'vertigo', title: 'Vertigo', runtime: 120, director: 'Alfred Hitchcock' } as Movie,
        { id: 'con-air', title: 'Con Air', runtime: 120, director: 'Simon West' } as Movie
    ];

    public test(): void {
        alert("Hello from dataservice");
    }

    public getMovie(id: string): Movie {
        return this.movies.find(x => x.id === id);
    }
}