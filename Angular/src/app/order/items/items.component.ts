import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatatransferService } from 'src/app/services/datatransfer.service';
import { LoginRegistrationService } from 'src/app/services/login-registration.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  
  itemdata;
  loginAs;

  constructor(private router:Router,private dataTransfer:DatatransferService,private login:LoginRegistrationService) { }

  ngOnInit(): void {
    //let oid=parseInt(this.route.snapshot.paramMap.get("oid"));
    //this.orderId=oid;
    this.loginAs=this.login.loginAs();
    try{
      this.dataTransfer.getData().subscribe(itemData=>this.itemdata=itemData);
    }catch{
      window.alert("chose a order");
      if(this.loginAs==='user'){
        this.router.navigate(['userorders']);
      }else{
        this.router.navigate(['orders']);
      }
      
    }
    
    //console.log(JSON.stringify(this.itemdata));
  }
  
  

}
