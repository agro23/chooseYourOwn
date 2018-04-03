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

}
