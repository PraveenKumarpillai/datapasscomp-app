import { Component } from '@angular/core';
import { MastersvcService } from '../mastersvc.service';

@Component({
  selector: 'app-parentsvc',
  templateUrl: './parentsvc.component.html',
  styleUrls: ['./parentsvc.component.css']
})
export class ParentsvcComponent {
  //listarray=[{"Name":"","Mark":""}]
  obj={"Name":"","Mark":""};
  constructor(private service:MastersvcService){
  }
  Updatedata(t1:any,t2:any)
  {
    this.service.saveemploee({"Name":t1,"Mark":t2})
  }
}
