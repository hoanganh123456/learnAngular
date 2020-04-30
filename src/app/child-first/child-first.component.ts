import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildSecondComponent } from '../child-second/child-second.component';
import { ChangeColorDirective } from '../change-color.directive';

@Component({
  selector: 'app-child-first',
  templateUrl: './child-first.component.html',
  styleUrls: ['./child-first.component.css']
})
export class ChildFirstComponent implements OnInit ,AfterViewInit  {
  @ViewChild(ChangeColorDirective) onChangeColor;
  constructor() { }

  ngOnInit() {
   
  }
  ngAfterViewInit() {
    // console.log('ngAfterViewInit',this.onCount.test);
    // this.changeColor();
    
  }

  changeColor() {
    // console.log('changeColor',this.onChangeColor.checkUiShopType('checkUiShopType'));
    //  this.changeColor
  }


}
