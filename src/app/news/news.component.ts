import { Observable } from 'rxjs/Observable';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewsComponent implements OnInit {

  public news: any;
  public articles;

  constructor(private data: NewsService) { 
    data.getNews().subscribe(data => {
      this.news = data;
      this.articles = this.news.articles;
      console.log(this.news);
    });
    // data.testPost('ANOTHER TEST ✌️');
    // data.deletePost('5a285313f1a3df48390345f1');
  }
  
  ngOnInit() {
    
  }

}
