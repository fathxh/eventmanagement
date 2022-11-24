import { Component,OnInit } from '@angular/core';
import { FormBuilder,Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthserviceService } from "../service/authservice.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  registerForm=this.fb.group({
    email:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    usercode:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(4),Validators.maxLength(4)]],
    password:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*'),Validators.minLength(4),Validators.maxLength(4)]],
    fname:['',[Validators.required]],
    lname:['',[Validators.required]],
    dob:['',[Validators.required]],
  })

  constructor(private fb:FormBuilder,private db:AuthserviceService,private rout:Router){}
  ngOnInit(): void {

  }

  onregister(){
    var fname:any=this.registerForm.value.fname
    var lname:any=this.registerForm.value.lname
    var email:any=this.registerForm.value.email
    var dob:any=this.registerForm.value.dob
    var usercode:any=this.registerForm.value.usercode
    var password:any=this.registerForm.value.password

    if(this.registerForm.valid){
      var name=fname+""+lname
      this.db.register(email,usercode,name,dob,password)
      .subscribe((result)=>{
        console.log("result:",result);
        if(result){
          alert("registered successfully")
          this.rout.navigateByUrl('')
        }else{
          alert('invalid form')
        }
      },(result)=>{
        
        console.log("test:",result.error.message)
        alert(result.error.message)
        this.rout.navigateByUrl('')
        

      })
      }

  }

}
