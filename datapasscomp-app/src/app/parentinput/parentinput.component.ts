import { Component } from '@angular/core';

@Component({
  selector: 'app-parentinput',
  templateUrl: './parentinput.component.html',
  styleUrls: ['./parentinput.component.css']
})
export class ParentinputComponent {
  mystring="";
  myobj:{"Name":string,"Country":string}={"Name":"","Country":""};
  myProp={"MyString":"","Myobject":{"Name":"","Country":""}};
  UpdatetoChild(t1:any,t2:any,t3:any)
  {
      this.mystring=t1;
      this.myobj={"Name":t2,"Country":t3};
      this.myProp.MyString=t1;
      this.myProp.Myobject=this.myobj;
  }
}
