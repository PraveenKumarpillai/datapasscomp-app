import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childoutput1',
  templateUrl: './childoutput1.component.html',
  styleUrls: ['./childoutput1.component.css']
})
export class Childoutput1Component {
@Output() pointertochildOutput=new EventEmitter<string>();
}
