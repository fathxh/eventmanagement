import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.css']
})
export class DeletedComponent implements OnInit{
  data:any
  ngOnInit(): void {
    const usercode=JSON.parse(localStorage.getItem('currentUsercode')||'')
    this.http.post('http://localhost:3001/showdelete',{"usercode":usercode})
    .subscribe((result:any)=>{
      console.log("result show",result);
      this.data=result.data
      console.log("test",this.data);
      
      
    },(result)=>{
      alert(result.error.message)
    })
  }
  constructor(private http:HttpClient){}
  delevent(name:any){
    var usercode=JSON.parse(localStorage.getItem('currentUsercode')||'')
  
   console.log("name",name);
   var data={
    "usercode":usercode,
    "name":name,
   }
    
      this.http.post('http://localhost:3001/remove',data)
      .subscribe((result:any)=>{
        console.log("result rem",result)
        location.reload()
  
      },(result)=>{
        alert(result.error.message)
      })
  
  }

}
