import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginSvc: LoginService) {

  }

  canActivate(): boolean {
    if (this.loginSvc.isLoggedIn) {
      return true
    } else {
      alert('You are not logged in')
      return false
    }
  }
  
}
