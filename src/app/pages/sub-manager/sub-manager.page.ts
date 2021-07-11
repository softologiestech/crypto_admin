import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { AddComponent } from 'src/app/components/add/add.component';

@Component({
  selector: 'app-sub-manager',
  templateUrl: './sub-manager.page.html',
  styleUrls: ['./sub-manager.page.scss'],
})
export class SubManagerPage implements OnInit {
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

    this.getManagerData();
    // console.log(this.id);
  }

  getManagerData() {
    this.db
      .doc(`sub_manager/${this.id}`)
      .valueChanges()
      .subscribe((doc) => {
        this.data = doc;

        console.log(this.data);
      });
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: AddComponent,
      event: ev,
      translucent: false,
    });

    await popover.present();
  }
}
