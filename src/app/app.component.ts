import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'news-app';
  activePage: string = "home";
  coloreDelTitolo: string = 'red';
  availableColors: string[] = ['red', 'blue', 'violet', 'green', 'yellow'];



  setPage(page: string) {
    this.activePage = page;
  }
}
