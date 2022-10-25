import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'news-app';
  activePage: string = "home";
  isLoggedIn: boolean = false;

  setPage(page: string) {
    this.activePage = page;
  }

  isLogged(event: boolean) {
    console.log(event);
    this.isLoggedIn = event;
  }
}
