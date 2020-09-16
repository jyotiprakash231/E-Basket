import { Component, OnInit } from '@angular/core';
import { LoginRegistrationService } from '../services/login-registration.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name:string;
  loginAs:string;
  constructor(private login:LoginRegistrationService) { 

  }

  ngOnInit(): void {
    this.name=this.login.loginName();
    this.loginAs=this.login.loginAs();
  }

}
