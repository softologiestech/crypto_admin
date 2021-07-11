import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import * as firebase from 'firebase';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-create-manager',
  templateUrl: './create-manager.page.html',
  styleUrls: ['./create-manager.page.scss'],
})
export class CreateManagerPage implements OnInit {
  name: string = '';
  username: string = '';
  email: string = '';
  id: string = Math.random().toString(36).slice(-6);
  password: string = '';
  address: string = '';
  type: string = localStorage.getItem('type');
  phone: string = '';
  alt: string = '';
  num_sub_manager: string = '';
  num_users: string = '';
  aadhar: string = '';
  aadharUrl: string = '';
  pan: string = '';
  panUrl: string = '';

  constructor(
    private auth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router,
    private uploadService: UploadService,
    private actionSheetController: ActionSheetController
  ) {}

  ngOnInit() {}

  create() {
    if (this.aadhar)
      this.uploadService.uploadAadhar(this.aadhar).then((data) => {
        // console.log(data)

        this.aadharUrl = data;
      });

    if (this.pan)
      this.uploadService.uploadPan(this.pan).then((data) => {
        // console.log(data)

        this.panUrl = data;
      });

    this.auth
      .createUserWithEmailAndPassword(this.email, this.password)
      .then((data) => {
        console.log(data);

        this.db
          .doc(`manager/${this.id}`)
          .set({
            name: this.name,
            username: this.username,
            email: this.email,
            phone: this.phone,
            alt: this.alt,
            password: this.password,
            id: this.id,
            type: 'manager',
            num_sub_manager: this.num_sub_manager,
            num_users: this.num_users,
            uid: data.user.uid,
            createdAt: Date.now(),
            createdBy: localStorage.getItem('uid'),
            creatorType: localStorage.getItem('type'),
          })
          .then(() => {
            if (this.type === 'admin')
              this.db
                .doc(`${this.type}/${localStorage.getItem('uid')}`)
                .collection('managers')
                .doc(this.id)
                .set({
                  id: this.id,
                  name: this.name,
                  username: this.username,
                  createdAt: Date.now(),
                });
            else
              this.db
                .doc(`${this.type}/${localStorage.getItem('id')}`)
                .collection('managers')
                .doc(this.id)
                .set({
                  id: this.id,
                  name: this.name,
                  username: this.username,
                  createdAt: Date.now(),
                });

            this.router.navigate(['/home']);
          });
      });
  }

  async presentAadharActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Aadhar Card Image Upload',
      buttons: [
        {
          text: 'Select from Gallery',
          icon: 'image-outline',
          handler: () => {
            this.uploadService.selectImagefromGallery().then((data) => {
              this.aadhar = data;

              console.log(data);
            });
          },
        },
        {
          text: 'Use Camera',
          icon: 'camera-outline',
          handler: () => {
            this.uploadService.selectImagefromCamera().then((data) => {
              this.aadhar = data;

              // console.log(data);
            });
          },
        },
      ],
    });

    await actionSheet.present();
  }

  async presentPanActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Aadhar Card Image Upload',
      buttons: [
        {
          text: 'Select from Gallery',
          icon: 'image-outline',
          handler: () => {
            this.uploadService.selectImagefromGallery().then((data) => {
              this.pan = data;

              console.log(data);
            });
          },
        },
        {
          text: 'Use Camera',
          icon: 'camera-outline',
          handler: () => {
            this.uploadService.selectImagefromCamera().then((data) => {
              this.pan = data;

              // console.log(data);
            });
          },
        },
      ],
    });

    await actionSheet.present();
  }
}
