import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childout',
  templateUrl: './childout.component.html',
  styleUrls: ['./childout.component.css']
})
export class ChildoutComponent {
   @Output() outchildpointer=new EventEmitter<string>()
}
