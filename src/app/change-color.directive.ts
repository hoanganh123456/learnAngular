import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {
  demoTest: any = "demoTest";
  constructor(
    public element: ElementRef
  ) { 
  
    
  }

  ngAfterViewInit() {
    // this.element.nativeElement.style.color = 'red';
   }

   onChangeColor(color) {
    this.element.nativeElement.style.color = color;
   }
  
}
