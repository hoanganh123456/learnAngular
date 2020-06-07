import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoPipe } from './demo.pipe';
import { ChildFirstPipe } from './child-first.pipe';
import { ChildFirstComponent } from './child-first/child-first.component';
import { ChildSecondComponent } from './child-second/child-second.component';
import { ChangeColorDirective } from './change-color.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactReactiveFormComponent } from './contact-reactive-form/contact-reactive-form.component';
import { CountService } from './count.service';
import { TestService } from './test.service';

@NgModule({
  declarations: [
    AppComponent,
    DemoPipe,
    ChildFirstPipe,
    ChildFirstComponent,
    ChildSecondComponent,
    ChangeColorDirective,
    ContactFormComponent,
    ContactReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CountService,
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
