import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-view-managers',
  templateUrl: './view-managers.page.html',
  styleUrls: ['./view-managers.page.scss'],
})
export class ViewManagersPage implements OnInit {
  type: string = localStorage.getItem('type');
  managers: any = [];
  managers1: any = [];

  constructor(private db: AngularFirestore) {}

  ngOnInit() {
    this.getManagers();
    this.getManagers1();
  }

  getManagers() {
    this.db
      .collection('manager')
      .valueChanges()
      .subscribe((data) => {
        this.managers = data;

        console.log(this.managers);
      });
  }

  getManagers1() {
    this.db
      .doc(`${this.type}/${localStorage.getItem('id')}`)
      .collection('managers')
      .valueChanges()
      .subscribe((data: any) => {
        this.managers1 = data;

        // console.log(this.users1);
      });
  }
}
