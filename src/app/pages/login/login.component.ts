import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    username: '',
    password: ''
  }

  constructor(private loginSvc: LoginService) { }

  ngOnInit(): void {
  }

  login() {
    if (this.user.password === '1234') {
      // this.isLogged.emit(true);
      this.loginSvc.isLoggedIn = true;
    } else {
      alert('Password errata');
    }
  }

}
