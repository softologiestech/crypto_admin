import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.page.html',
  styleUrls: ['./view-users.page.scss'],
})
export class ViewUsersPage implements OnInit {
  type: string = localStorage.getItem('type');
  users: any = [];
  users1: any = [];

  constructor(private db: AngularFirestore) {}

  ngOnInit() {
    this.getUsers();
    this.getUsers1();
  }

  getUsers() {
    this.db
      .collection('user')
      .valueChanges()
      .subscribe((data) => {
        this.users = data;

        // console.log(this.users);
      });
  }

  getUsers1() {
    this.db
      .doc(`${this.type}/${localStorage.getItem('id')}`)
      .collection('users')
      .valueChanges()
      .subscribe((data: any) => {
        this.users1 = data;

        // console.log(this.users1);
      });
  }
}
