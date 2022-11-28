import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit{
user:any

  ngOnInit(): void {
  this.user=JSON.parse(localStorage.getItem('currentName')||'')
    
  }
  constructor(private rout:Router){
    
  }
  logout(){
    localStorage.removeItem('currentUsercode')
    this.rout.navigateByUrl('')

  }


}
