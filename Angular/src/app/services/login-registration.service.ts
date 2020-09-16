import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import {catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginRegistrationService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  constructor(private http:HttpClient,private router:Router) { }

  url="http://localhost:8080/user";
  loginUrl="http://localhost:8080/user/login";
  

  register(user:User){
    return this.http.post(this.url,JSON.stringify(user),this.httpOptions)
      .pipe(catchError(this.errorHandler));
    //window.alert("Successfully registered.");
    //this.router.navigate(["/login"]);
  }

  checkLogin(user:User){
    return this.http.post(this.loginUrl,JSON.stringify(user),this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error:HttpErrorResponse){
    return throwError(error);
  }
  
  isLoggedIn(){
    if(sessionStorage.getItem("isLogin")!==null){
      return true;
    }
  }

  loginAs(){
    if(sessionStorage.getItem("isLogin")){
      if(sessionStorage.getItem("loginAs")==="admin")
        return "admin";
      else
        return "user";
    }
  }

  loginName(){
    if(sessionStorage.getItem("isLogin")){
      return sessionStorage.getItem("name")[0].toUpperCase() +  sessionStorage.getItem("name").slice(1);
    }
  }

  logout(){
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("isLogin");
    sessionStorage.clear();
  }
}
