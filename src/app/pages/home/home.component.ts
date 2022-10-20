import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news';
import { NEWS } from 'src/app/assets/news-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public homeNews: News;

  constructor() { 
    this.homeNews = NEWS.filter((news) => news.important)[0];
  }

  ngOnInit(): void {
    
  }
}
