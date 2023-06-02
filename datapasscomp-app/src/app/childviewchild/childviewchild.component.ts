import { Component } from '@angular/core';

@Component({
  selector: 'app-childviewchild',
  templateUrl: './childviewchild.component.html',
  styleUrls: ['./childviewchild.component.css']
})
export class ChildviewchildComponent {
  parentname="";
  obj:{"Name":string,"Country":string}={Name:"",Country:""};
  UpdateChild(t1:any,t2:any,t3:any){
    this.obj.Name=t1;this.obj.Country=t2;this.parentname=t3;
  }
}
