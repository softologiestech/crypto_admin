import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { AddComponent } from 'src/app/components/add/add.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  id: string;
  type: string = localStorage.getItem('type');
  data: any = {};

  constructor(
    private route: ActivatedRoute,
    private db: AngularFirestore,
    private popoverController: PopoverController
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params.id;

    this.getUserData();
    console.log(this.id);
  }

  getUserData() {
    this.db
      .doc(`user/${this.id}`)
      .valueChanges()
      .subscribe((doc) => {
        this.data = doc;

        // console.log(this.data);
      });
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: AddComponent,
      componentProps: { data: this.data },
      event: ev,
      translucent: false,
    });

    await popover.present();
  }
}
