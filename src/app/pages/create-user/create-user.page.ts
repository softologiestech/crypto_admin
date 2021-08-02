import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ActionSheetController, LoadingController } from '@ionic/angular';
import * as firebase from 'firebase';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {
  name: string = '';
  username: string = '';
  email: string = '';
  id: string = Math.random().toString(36).slice(-8);
  type: string = localStorage.getItem('type');
  password: string = '';
  address: string = '';
  phone: string = '';
  alt: string = '';
  aadhar: string = '';
  aadharUrl: string = '';
  pan: string = '';
  panUrl: string = '';

  constructor(
    private auth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router,
    private uploadService: UploadService,
    private actionSheetController: ActionSheetController,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {}

  create() {
    this.presentLoading();

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
          .doc(`user/${this.id}`)
          .set({
            name: this.name,
            username: this.username,
            email: this.email,
            phone: this.phone,
            alt: this.alt,
            password: this.password,
            id: this.id,
            commission: 700,
            net_commission: 0,
            type: 'user',
            uid: data.user.uid,
            createdAt: Date.now(),
            createdBy: localStorage.getItem('uid'),
            creatorType: localStorage.getItem('type'),
          })
          .then(() => {
            if (this.type === 'admin')
              this.db
                .doc(`${this.type}/${localStorage.getItem('uid')}`)
                .collection('users')
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
                .collection('users')
                .doc(this.id)
                .set({
                  id: this.id,
                  name: this.name,
                  username: this.username,
                  createdAt: Date.now(),
                });

            this.router.navigate(['/home']);
          });
      })
      .catch((err) => {
        this.loadingController.dismiss();
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

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Creating User ...',
      spinner: 'crescent',
    });
    await loading.present();
  }
}
