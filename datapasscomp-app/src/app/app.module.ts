import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentinputComponent } from './parentinput/parentinput.component';
import { ChildinputComponent } from './childinput/childinput.component';
import { ParentviewchildComponent } from './parentviewchild/parentviewchild.component';
import { ChildviewchildComponent } from './childviewchild/childviewchild.component';
import { ParentoutputComponent } from './parentoutput/parentoutput.component';
import { ChildoutComponent } from './childout/childout.component';
import { Parentoutput1Component } from './parentoutput1/parentoutput1.component';
import { Childoutput1Component } from './childoutput1/childoutput1.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentinputComponent,
    ChildinputComponent,
    ParentviewchildComponent,
    ChildviewchildComponent,
    ParentoutputComponent,
    ChildoutComponent,
    Parentoutput1Component,
    Childoutput1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
