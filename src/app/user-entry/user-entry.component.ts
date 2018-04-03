import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../../models/user.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-user-entry',
  templateUrl: './user-entry.component.html',
  styleUrls: ['./user-entry.component.css'],
  providers: [UserService]
})

export class UserEntryComponent implements OnInit {
  newUser: User;
  users: FirebaseListObservable<any[]>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers()
  }

  submitForm(name: string) {
    let con = Math.floor(Math.random()*15)+6
    let charm = Math.floor(Math.random()*15)+6
    this.newUser = new User(name, con, charm);
    this.userService.addUser(this.newUser);
  }

  startGame(key: string){
    console.log(key);
    this.userService.setCurrentUser(key)
  }

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
