import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-childinput',
  templateUrl: './childinput.component.html',
  styleUrls: ['./childinput.component.css']
})
export class ChildinputComponent {
 @Input()inputMyprop={"MyString":"","Myobject":{"Name":"","Country":""}};
}
