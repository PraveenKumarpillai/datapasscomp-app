import { Component } from '@angular/core';
import { MastersvcService } from '../mastersvc.service';

@Component({
  selector: 'app-childsvc',
  templateUrl: './childsvc.component.html',
  styleUrls: ['./childsvc.component.css']
})
export class ChildsvcComponent {
  listarray=[{"Name":"","Mark":""}];
  constructor(private service:MastersvcService){
    this.listarray=this.service.getemployee();
   }
   Updatedata(t1:any,t2:any)
   {
    this.service.saveemploee({"Name":t1,"Mark":t2});
   }
}
