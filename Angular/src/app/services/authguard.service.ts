import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginRegistrationService } from './login-registration.service';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate  {

  constructor(private router: Router,private login:LoginRegistrationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.login.isLoggedIn())
      return true;
    this.router.navigate(['login']);
    return false;
  }
}
