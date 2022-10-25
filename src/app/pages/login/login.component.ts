import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() isLogged: EventEmitter<boolean> = new EventEmitter<boolean>();

  user = {
    username: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    if (this.user.password === '1234') {
      this.isLogged.emit(true);
    } else {
      alert('Password errata');
    }
  }

}
