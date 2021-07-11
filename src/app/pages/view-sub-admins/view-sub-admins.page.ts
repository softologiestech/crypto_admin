import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-view-sub-admins',
  templateUrl: './view-sub-admins.page.html',
  styleUrls: ['./view-sub-admins.page.scss'],
})
export class ViewSubAdminsPage implements OnInit {
  sub_admins: any = [];

  constructor(private db: AngularFirestore) {}

  ngOnInit() {
    this.getSubAdmins();
  }

  getSubAdmins() {
    this.db
      .collection('sub_admin')
      .valueChanges()
      .subscribe((data) => {
        this.sub_admins = data;

        console.log(this.sub_admins);
      });
  }
}
