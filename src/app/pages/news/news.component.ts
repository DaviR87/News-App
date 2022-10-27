import { Component, Input, OnInit } from '@angular/core';
import { NEWS } from 'src/app/assets/news-data';
import { LoginService } from 'src/app/login.service';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public news: News[] = [];
  isLogged = false;
  
  constructor(
    private loginSvc: LoginService,
    private newsSvc: NewsService
    ) { }

  ngOnInit(): void {
    this.isLogged = this.loginSvc.isLoggedIn;
    this.newsSvc.newsList.subscribe(news => {
      this.news = news;
    })
  }

  handleNews(news: News) {
    this.newsSvc.addNews(news);
  }

  getNews() {
    this.newsSvc.getNews();
  }

}
