import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wakeup',
  templateUrl: './wakeup.component.html',
  styleUrls: ['./wakeup.component.css']
})
export class WakeupComponent implements OnInit {

  currentView: number = 0;

  constructor() { }

  ngOnInit() {
  }

  optionOne(){
    this.currentView = 1;
  }

  optionTwo(){
    this.currentView = 2;
  }

  optionThree(){
    this.currentView = 3;
  }

  optionFour(){
    this.currentView = 4;
  }

  optionFive(){
    this.currentView = 5;
  }

  optionReset(){
    this.currentView = 0;
  }

}
