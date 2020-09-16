import { Component, OnInit } from '@angular/core';
import { LoginRegistrationService } from 'src/app/services/login-registration.service';
import {User} from 'src/app/models/user.model'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user:User=new User();
  error:boolean=false;
  success:boolean=false;
  errorMessage:string;
  successMessage:string;
  constructor(private registrationService:LoginRegistrationService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.user.role="user";
    this.registrationService.register(this.user)
      .subscribe(
        data=>{
          this.successMessage="Registration Success";
          this.success=true;
          this.error=false;
          //this.router.navigate(["/login"]);
        },
        error=>{
          console.log(error);
          this.errorMessage=error.error.message;
          this.error=true;
          this.success=false;
        }
      );
  }

  resetFormData(registrationForm){
    registrationForm.reset();
  }

}
