import { Component, EventEmitter, Input, OnInit ,Output} from '@angular/core';

@Component({
  selector: 'app-eventform',
  templateUrl: './eventform.component.html',
  styleUrls: ['./eventform.component.css']
})
export class EventformComponent implements OnInit{
  ename:any
  edate:any
  usercode=JSON.parse(localStorage.getItem('currentUsercode')||'')
@Input() item:any|undefined
// @Input() date:any|undefined
// @Input() usercode:any|undefined
// @Output() check= new EventEmitter()
// @Output() onAddename= new EventEmitter()
// @Output() onAddedate= new EventEmitter()
// @Output() onAddusercode= new EventEmitter()
@Output() onAdd= new EventEmitter()
@Output() onCancel= new EventEmitter()

  ngOnInit(){}

cancel(){
  this.onCancel.emit()
}
add(){
  const ename=this.ename
  const edate=this.edate
  const usercode=this.usercode
  // this.check.emit(this.item)
  this.onAdd.emit({ename,edate,usercode})
}

}
