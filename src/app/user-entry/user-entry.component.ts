import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../../models/user.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-entry',
  templateUrl: './user-entry.component.html',
  styleUrls: ['./user-entry.component.css'],
  providers: [UserService]
})

export class UserEntryComponent implements OnInit {
  newUser: User;
  users: FirebaseListObservable<any[]>;
  userSet: boolean = false;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers()
  }

  submitForm(name: string) {
    let con = Math.floor(Math.random()*15)+6
    let charm = Math.floor(Math.random()*15)+6
    this.newUser = new User(name, con, charm);
    this.userService.addUser(this.newUser);
    this.userSet = true;
  }

  // startGame(key: string){
  //   this.userService.setCurrentUser(key)
  //   console.log("in startGame in user-entry, key is " + key);
  // }
  startGame(user){
    // this.userService.setCurrentUser(key)
    this.userService.currentUserKey=user.$key;
    console.log("this.userService.currentUserKey " + this.userService.currentUserKey);
    console.log("in startGame in user-entry, key is " + user.$key);
    this.router.navigate(['wakeup']);
    User.key = user.$key;
    // nav-bar service pass in the key. So OnInit in every room would call that service
  }

  // goToDetailPage(clickedAlbum) {
  //   this.router.navigate(['albums', clickedAlbum.$key]);
  // }

}


//
// import { Component, OnInit } from '@angular/core';
// import { AlbumService } from '../album.service';
// import { Album } from '../album.model';
//
// @Component({
//   selector: 'app-admin',
//   templateUrl: './admin.component.html',
//   styleUrls: ['./admin.component.css'],
//   providers: [AlbumService]
// })
// export class AdminComponent implements OnInit {
//
//   constructor(private albumService: AlbumService) { }
//
//   ngOnInit() {
//   }
//
//   submitForm(title: string, artist: string, description: string) {
//     var newAlbum: Album = new Album(title, artist, description);
//     this.albumService.addAlbum(newAlbum);
//   }
//
// }
