import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoPipe } from './demo.pipe';
import { ChildFirstPipe } from './child-first.pipe';
import { ChildFirstComponent } from './child-first/child-first.component';
import { ChildSecondComponent } from './child-second/child-second.component';
import { ChangeColorDirective } from './change-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    DemoPipe,
    ChildFirstPipe,
    ChildFirstComponent,
    ChildSecondComponent,
    ChangeColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
