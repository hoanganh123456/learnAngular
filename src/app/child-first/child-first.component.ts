import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildSecondComponent } from '../child-second/child-second.component';
import { ChangeColorDirective } from '../change-color.directive';

@Component({
  selector: 'app-child-first',
  templateUrl: './child-first.component.html',
  styleUrls: ['./child-first.component.css']
})
export class ChildFirstComponent implements OnInit ,AfterViewInit  {
  @ViewChild(ChangeColorDirective) ChangeColorDirective : ChangeColorDirective;

  // @ViewChild(ChildSecondComponent) child : ChildSecondComponent;
  constructor() { }

  ngOnInit() {
    // console.log('ngOnInit',this.child.test);
  }
  ngAfterViewInit() {
    
    
    
  }

  changeColor(color) {
    // console.log('changeColor',this.onChangeColor.checkUiShopType('checkUiShopType'));
     this.ChangeColorDirective.onChangeColor(color)
  }

  


}
