import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-view-sub-managers',
  templateUrl: './view-sub-managers.page.html',
  styleUrls: ['./view-sub-managers.page.scss'],
})
export class ViewSubManagersPage implements OnInit {
  type: string = localStorage.getItem('type');
  sub_managers: any = [];
  sub_managers1: any = [];

  constructor(private db: AngularFirestore) {}

  ngOnInit() {
    this.getSubManagers();
    this.getSubManagers1();
  }

  getSubManagers() {
    this.db
      .collection('sub_manager')
      .valueChanges()
      .subscribe((data) => {
        this.sub_managers = data;

        // console.log(this.sub_managers);
      });
  }

  getSubManagers1() {
    this.db
      .doc(`${this.type}/${localStorage.getItem('id')}`)
      .collection('sub_managers')
      .valueChanges()
      .subscribe((data: any) => {
        this.sub_managers1 = data;

        // console.log(this.users1);
      });
  }
}
