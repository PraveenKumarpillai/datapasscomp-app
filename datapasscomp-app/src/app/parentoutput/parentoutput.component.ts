import { Component } from '@angular/core';

@Component({
  selector: 'app-parentoutput',
  templateUrl: './parentoutput.component.html',
  styleUrls: ['./parentoutput.component.css']
})
export class ParentoutputComponent {
  childdata=""
  UpdateName(t1:string)
  {
    this.childdata=t1;
  }
}
