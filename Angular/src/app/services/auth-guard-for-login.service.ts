import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { LoginRegistrationService } from './login-registration.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardForLoginService implements CanActivate {
  constructor(private router: Router,private login:LoginRegistrationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.login.isLoggedIn())
      return true;
    this.router.navigate(['/products']);
    return false;
  }
}
