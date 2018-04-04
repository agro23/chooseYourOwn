import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';

import { Component, Input, OnInit, Injectable } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from '../models/user.model';
import { Item} from '../models/item.model';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ UserService ]
})


export class AppComponent {
  constructor(private router: Router, private userService: UserService) { }
  // constructor(private userService: UserService) { }
  public user;
  // aUserKey = "bazooka";
  title = 'Choose Your Own';
  myUser= this.userService.getUserById(User.key).subscribe(user => {this.user = user});
}
