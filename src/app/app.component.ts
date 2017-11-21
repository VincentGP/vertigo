import { Movie } from './movie';
import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  // Initialize title
  title: string;
  director: string;
  runtime: number;
  
  // For retrieving the every movie
  moviesCollection: AngularFirestoreCollection<Movie>;
  movies: any;

  // For retrieving a single movie
  movieDocument: AngularFirestoreDocument<Movie>;
  movie: Observable<Movie>;

  showSpinner: boolean = true;

  constructor(private db: AngularFirestore) {}

  private addMovie() : void {
    let id = this.title.replace(/\s+/g, '-').toLowerCase();
    this.db.collection('movies').doc(id).set({ 'title': this.title, 'director': this.director, 'runtime': this.runtime });
  }
  
  getMovie(id) {
    this.movieDocument = this.db.doc('movies/' + id);
    this.movie = this.movieDocument.valueChanges();
  }

  deleteMovie(id) {
    this.db.doc('movies/' + id).delete();
  }

  ngOnInit() {
    this.moviesCollection = this.db.collection('movies');
    this.movies = this.moviesCollection.snapshotChanges()
      .map(actions => {
        return actions.map(model => {
          const data = model.payload.doc.data() as Movie;
          const id = model.payload.doc.id;
          return { id, data };
        });
      });
    this.movies.subscribe(() => this.showSpinner = false )
  }

}
