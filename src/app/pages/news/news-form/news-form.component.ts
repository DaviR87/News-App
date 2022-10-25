import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { News } from 'src/app/models/news';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.css']
})
export class NewsFormComponent implements OnInit {
  @Output() sendNews: EventEmitter<News> = new EventEmitter<News>();

  newsForm: FormGroup;

  constructor() {
    this.newsForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      important: new FormControl(false)
    })
  }

  ngOnInit(): void {
  }

  createNews() {
    const news: News = {
      // title: this.newsForm.get('title').value,
      // description: this.newsForm.get('description').value,
      // important: this.newsForm.get('important').value,
      ...this.newsForm.getRawValue(),
      publishDate: new Date()
    }

    console.log(news);
    this.sendNews.emit(news);

  }

}
