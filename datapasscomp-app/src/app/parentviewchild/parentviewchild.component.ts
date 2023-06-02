import { Component, ViewChild } from '@angular/core';
import { ChildviewchildComponent } from '../childviewchild/childviewchild.component';

@Component({
  selector: 'app-parentviewchild',
  templateUrl: './parentviewchild.component.html',
  styleUrls: ['./parentviewchild.component.css']
})
export class ParentviewchildComponent {
  @ViewChild(ChildviewchildComponent) viewdata=new ChildviewchildComponent();
  
  UpdateParent(t1:any,t2:any,t3:any)
  {
    this.viewdata.UpdateChild(t1,t2,t3);
  }
}
