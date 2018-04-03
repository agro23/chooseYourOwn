import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../../models/user.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [ UserService ]
})
export class NavbarComponent implements OnInit {
  public currentUserKey: string = "";
  private users: FirebaseListObservable<any>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.currentUserKey = this.userService.getCurrentUser();
    // this.currentUser = this.userService.getUserById(this.currentUserKey);

    }

// I don't even know what we're trying to do now.
    getUsersByKey(key){
      this.users = this.userService.getUsers();
      this.users.forEach(function(aUser){
        console.log(aUser);
        aUser.forEach(function(thisUser){
          console.log(thisUser.$key);
        });
      return aUser;
    });
  }
}

  // ngDoCheck() {
  //   this.currentUserKey = this.userService.getCurrentUser();
  //   if (this.currentUserKey !=="0" && this.currentUserKey !==undefined) {
  //     console.log(this.currentUserKey)
  //   }
  //   this.currentUser = this.userService.getUserById(this.currentUserKey)
  // }


// }
