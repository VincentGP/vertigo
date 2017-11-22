import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Movie } from '../movie';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MovieListComponent implements OnInit {

  // Initialize title
  title: string;
  director: string;
  runtime: number;

  // For retrieving the every movie
  moviesCollection: AngularFirestoreCollection<Movie>;
  movies: any;

  showSpinner: boolean = true;

  //Adds the database and router objects
  constructor(private db: AngularFirestore, private router: Router) { }

  private addMovie(): void {
    let id = this.title.replace(/\s+/g, '-').toLowerCase();
    this.db.collection('movies').doc(id).set({ 'title': this.title, 'director': this.director, 'runtime': this.runtime });
  }

  navigateToMovie(id) {
    this.router.navigate(['movies/', id]);
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
    this.movies.subscribe(() => this.showSpinner = false)
  }
}