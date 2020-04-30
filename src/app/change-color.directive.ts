import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  constructor(
    public element: ElementRef
  ) { 
  
    
  }

  checkUiShopType(type) {
    console.log('ChangeColorDirective checkUiShopType',type);
    // if (shopType) {
    //   this.element.nativeElement.style.background = "red";
    // } else {
    //   this.element.nativeElement.style.background = "green";
    // }
  }
}
