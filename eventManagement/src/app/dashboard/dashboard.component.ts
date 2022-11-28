import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
data:any
  ngOnInit(){
    
  }
  constructor(private http:HttpClient,private rout:Router){
    const checkusercode=localStorage.getItem('currentUsercode')
    if(!checkusercode){
      alert('please login again')
      this.rout.navigateByUrl('')
    }else{
    const usercode=JSON.parse(localStorage.getItem('currentUsercode')||'')

     this.http.post('http://localhost:3001/showevent',{"usercode":usercode})
    .subscribe((result:any)=>{
      console.log("result show",result);
      this.data=result.data
      console.log("test",this.data);
      
      
    },(result)=>{
      alert(result.error.message)
    })
  }}
  
  name:any
  date:any
  code:any
  flag:any

add(out:any){
  this.name=out.ename
  this.date=out.edate
  this.code=out.usercode
  // console.log("out",out);
  
  
    this.http.post('http://localhost:3001/addevent',out)
    .subscribe((result:any)=>{
      console.log("result add",result);
      alert(result.message)
      location.reload()
      
    },(result)=>{
      alert(result.error.message)
    })
  

}
delevent(name:any,date:any){
  var usercode=JSON.parse(localStorage.getItem('currentUsercode')||'')

 console.log("name",name);
 var data={
  "usercode":usercode,
  "name":name,
  "date":date
 }
  
    this.http.post('http://localhost:3001/delevent',data)
    .subscribe((result:any)=>{
      console.log("result rem",result)
      location.reload()

    },(result)=>{
      alert(result.error.message)
    })

}
// ename(ename:any){
//   this.name=ename

// }
// edate(edate:any){
//   this.date=edate

// }
// usercode(usercode:any){
//   this.code=usercode
  

// }


onadd(){
  this.flag="1"
}
cancel(){
  this.flag=""
}
}
