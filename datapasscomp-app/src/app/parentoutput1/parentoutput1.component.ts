import { Component } from '@angular/core';

@Component({
  selector: 'app-parentoutput1',
  templateUrl: './parentoutput1.component.html',
  styleUrls: ['./parentoutput1.component.css']
})
export class Parentoutput1Component {
  testdata=""
  Updatedata(data:any){
    this.testdata=data;
  }
}
