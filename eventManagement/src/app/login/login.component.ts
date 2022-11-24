import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthserviceService } from '../service/authservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  email:any
  password=""
  constructor(private root:Router,private db:AuthserviceService){}
  ngOnInit() {
    
  }

login(){
  var email:any=this.email
    var pass:any=this.password

    this.db.login(email,pass)
     .subscribe((result:any)=>{
      // console.log("result---------------",result);
      
      alert(result.message)
      localStorage.setItem("currentEmail",JSON.stringify(result.email))
      localStorage.setItem("currentUsercode",JSON.stringify(result.usercode))
      localStorage.setItem("currentName",JSON.stringify(result.name))
      this.root.navigateByUrl('dashboard')

     },(result:any)=>{
      alert(result.error.message)
     })
}
  
  onreg(){
    this.root.navigateByUrl('register')
  }
}
