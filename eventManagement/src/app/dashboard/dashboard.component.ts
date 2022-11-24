import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
data:any=''
  ngOnInit(){
    const usercode=JSON.parse(localStorage.getItem('currentUsercode')||'')
    this.http.post('http://localhost:3001/showevent',usercode)
    .subscribe((result:any)=>{
      console.log("result",result);
      // this.data=result.data
      // console.log("test",this.data);
      // console.log("test",result.data);
      
      
    },(result)=>{
      alert(result.error.message)
    })

  }
  constructor(private http:HttpClient){}
  
  name:any
  date:any
  code:any
  flag:any

add(out:any){
  this.name=out.ename
  this.date=out.edate
  this.code=out.usercode
  console.log("out",out);
  
  
    this.http.post('http://localhost:3001/addevent',out)
    .subscribe((result:any)=>{
      console.log("result",result);
      alert(result.message)
      
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
