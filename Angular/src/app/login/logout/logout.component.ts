import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRegistrationService } from 'src/app/services/login-registration.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private login:LoginRegistrationService,private router:Router) { }

  ngOnInit(): void {
    this.login.logout();
    //location.reload;
    this.router.navigate(['']);
  }



}
