import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child-second',
  templateUrl: './child-second.component.html',
  styleUrls: ['./child-second.component.css']
})
export class ChildSecondComponent implements OnInit {
  public test: any = "Hello work";
  count: number = 0;
  constructor() { }

  ngOnInit() {
  }

  countIn() {
    this.count++;
  }

  countDe() {
    this.count--;
  }

}
