import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // animation triggers go here
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open <=> closed', [
        animate('1s')
      ]),
    ]),
  ]
})
export class AppComponent implements OnInit {
  @ViewChild('demo') demoTest: ElementRef;
  fileUpLoad: any;
  imageURL: any;
  isOpen = true;


  title = 'angularExample';
  students: any[] = [
    {
        ID: 'std101', Name: 'RaKesh ROUT',
        DOB: '12/8/1988', Gender: 'Male', CourseFee: 1234.56
    },
    {
        ID: 'std102', Name: 'ANURAG Mohanty', 
        DOB: '10/14/1989', Gender: 'Male', CourseFee: 6666.00
    },
    {
        ID: 'std103', Name: 'Priyanka Dewangan', 
        DOB: '7/24/1992', Gender: 'Female', CourseFee: 6543.15
    },
    {
        ID: 'std104', Name: 'Hina SHARMA', 
        DOB: '8/19/1990', Gender: 'Female', CourseFee: 9000.50
    },
    {
        ID: 'std105', Name: 'SamBIt SataPATHY',
        DOB: '4/12/1991', Gender: 'Male', CourseFee: 9876.54
    }
  ];
  name:string = "nguyễn văn a";
  birthday = new Date(1988, 3, 15); // April 15, 1988
  objectDemo =  {
    ID: 'std105', Name: 'SamBIt SataPATHY',
    DOB: '4/12/1991', Gender: 'Male', CourseFee: 9876.54
  }
  constructor() {
    
  }
  ngOnInit() {
    // this.demo.nativeElement.value = '';
  }
  changeColor() {
    // this.demoTest.nativeElement.style.color = "red"
  }

  handleFileInput(file: FileList) {
    this.fileUpLoad = file.item(0);
    let render = new FileReader();
    render.onload  = (event: any) => {
      this.imageURL = event.target.result;
      console.log('imageURL',this.imageURL);
    }
   
    render.readAsDataURL(this.fileUpLoad);
    
  }

  clear() {
    this.demoTest.nativeElement.value = "";
    this.imageURL = "";
  }


  toggle() {
    this.isOpen = !this.isOpen;
  }


}
