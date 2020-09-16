import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { LoginRegistrationService } from '../services/login-registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  error: boolean = false;
  success: boolean = false;
  isLogin: boolean = false;
  isLoginSuccess: boolean = true;
  userData;
  errorMessage:string;
  successMessage:string;
  loginAs:string;

  constructor(private loginService: LoginRegistrationService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.successMessage = "Logging in...";
    this.error = false;
    this.success = true;
    this.loginService.checkLogin(this.user)
      .subscribe(
        data => {
          this.userData = data;
          this.isLoginSuccess = true;
          this.setUserRole();
        },
        error => {
          this.errorMessage = error.error.message;
          this.error = true;
          this.success = false;
        }
      );
  }

 

  setUserRole() {
    if (this.isLoginSuccess) {
      sessionStorage.setItem("loginAs", this.userData.role);
      sessionStorage.setItem("name", this.userData.firstName);
      sessionStorage.setItem("id", this.userData.email);
      sessionStorage.setItem("isLogin", "true");
      this.router.navigate([""]);
    } else {
      this.errorMessage = "something went wrong";
      this.error = true;
      this.success = false;
    }
  }

  isLoggedIn() {
    if (this.isLoginSuccess) {
      return true;
    }
  }

  clearForm(loginForm) {
    loginForm.reset();
  }

}
