import { Component, OnInit } from '@angular/core';
import { LoginRegistrationService } from '../services/login-registration.service';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  constructor(public login:LoginRegistrationService) { }
  name:string;
  ngOnInit(): void {
    this.name=this.login.loginName();

    
  }

}
