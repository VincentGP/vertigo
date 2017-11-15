import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { Movie } from './movie'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MovieComponent implements OnInit {

  // Initialize title
  title: string;

  // For retrieving the every movie
  moviesCollection: AngularFirestoreCollection<Movie>;
  movies: any;

  // For retrieving a single movie
  movieDocument: AngularFirestoreDocument<Movie>;
  movie: Observable<Movie>;

  constructor(private db: AngularFirestore) {

  }

  addMovie() {
    this.db.collection('movies').doc(this.title).set({ 'title': this.title });
  }
  getMovie(id) {
    this.movieDocument = this.db.doc('movies/' + id);
    this.movie = this.movieDocument.valueChanges();
  }
  deleteMovie(id) {
    this.db.doc('movies/' + id).delete();
  }

  ngOnInit() {
  }

}
