import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService{

constructor(private http:HttpClient){}

  register(email:any,usercode:any,name:any,dob:any,password:any){
    const data={
      email,usercode,name,dob,password
    }
    return this.http.post('http://localhost:3001/register',data)
  }
  login(email:any,password:any){
    const data={
      email,password
    }
    return this.http.post('http://localhost:3001/login',data)
  }


}
