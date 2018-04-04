import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../../models/user.model';
import { NewUser } from '../../models/newuser.model';

import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire2/database';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [ UserService ]
})

export class NavbarComponent implements OnInit {

  @Input() currentUserKey: string; // this will get the key from the service I hope

  // currentUserKey: string;
  private users: FirebaseListObservable<any>;
  private user: FirebaseObjectObservable<any>;
  currentUser;
  name;
  con;
  charm;
  karma;
  money;
  constructor(private route: ActivatedRoute, private location: Location, private router: Router, private userService: UserService) { }

  ngOnInit() {
    // this.currentUser = this.userService.getUserById(User.key);
    // this.currentUserKey =

    this.userService.getUserById(User.key).subscribe(dataLastEmittedFromObserver => {
      this.currentUser = dataLastEmittedFromObserver;

      console.log("OnInit subscriber name = " + this.currentUser);
    });

    console.log("OnInit User = " + this.currentUser);
    // this.money = 0;
    // this.name = this.currentUser.name;
    // this.charm = this.currentUser.charm;
    // this.con = this.currentUser.con;
    // this.karma = 0;
    //
    // console.log("OnInit= " + this.name);
  }

// I don't even know what we're trying to do now.
    listUsers(){
      this.users = this.userService.getUsers();
      this.users.forEach(function(aUser){
        console.log("aUser = " + aUser);
        aUser.forEach(function(thisUser){
          console.log("thisUser.$key " + thisUser.$key);
        });
      return aUser;
    });

  }

  displayUser(){
    console.log(User.key);
  }
  // navbarStartGame(user){
  //   // this.userService.setCurrentUser(key)
  //   this.userService.currentUserKey=user.$key;
  //   console.log("this.userService.currentUserKey " + this.userService.currentUserKey);
  //   console.log("in startGame in user-entry, key is " + user.$key);
  //   this.router.navigate(['wakeup']);
  //   // nav-bar service pass in the key. So OnInit in every room would call that service
  // }
}

  // ngDoCheck() {
  //   this.currentUserKey = this.userService.getCurrentUser();
  //   if (this.currentUserKey !=="0" && this.currentUserKey !==undefined) {
  //     console.log(this.currentUserKey)
  //   }
  //   this.currentUser = this.userService.getUserById(this.currentUserKey)
  // }


// }
