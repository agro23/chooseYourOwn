import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { Item} from '../../models/item.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.users = database.list('users');
  }

  getUsers(){
    return this.users;
  }

  addUser(user: User){
    this.users.push(user);
  }

}
