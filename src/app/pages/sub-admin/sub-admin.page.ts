import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-admin',
  templateUrl: './sub-admin.page.html',
  styleUrls: ['./sub-admin.page.scss'],
})
export class SubAdminPage implements OnInit {
  id: string;
  data: any = {};

  constructor(private route: ActivatedRoute, private db: AngularFirestore) {}

  ngOnInit() {
    this.id = this.route.snapshot.params.id;

    this.getSubAdminData();
    // console.log(this.id);
  }

  getSubAdminData() {
    this.db
      .doc(`sub_admin/${this.id}`)
      .valueChanges()
      .subscribe((doc) => {
        this.data = doc;

        console.log(this.data);
      });
  }
}
