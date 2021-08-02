import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ActionSheetController, LoadingController } from '@ionic/angular';
import * as firebase from 'firebase';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-create-sub-admin',
  templateUrl: './create-sub-admin.page.html',
  styleUrls: ['./create-sub-admin.page.scss'],
})
export class CreateSubAdminPage implements OnInit {
  name: string = '';
  username: string = '';
  email: string = '';
  password: string = '';
  type: string = localStorage.getItem('type');
  address: string = '';
  phone: string = '';
  alt: string = '';
  id: string = Math.random().toString(36).slice(-5);
  num_manager: string = '';
  aadhar: string = '';
  aadharUrl: string = '';
  pan: string = '';
  panUrl: string = '';

  managers: Array<any> = [1, 2, 3, 4, 5];

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
          .doc(`sub_admin/${this.id}`)
          .set({
            name: this.name,
            username: this.username,
            email: this.email,
            phone: this.phone,
            alt: this.alt,
            password: this.password,
            id: this.id,
            aadharUrl: this.aadharUrl,
            panUrl: this.panUrl,
            type: 'sub_admin',
            num_manager: this.num_manager,
            uid: data.user.uid,
            createdAt: Date.now(),
            createdBy: localStorage.getItem('uid'),
            creatorType: localStorage.getItem('type'),
          })
          .then(() => {
            this.db
              .doc(`${this.type}/${localStorage.getItem('uid')}`)
              .collection('sub_admins')
              .doc(this.id)
              .set({
                id: this.id,
                name: this.name,
                username: this.username,
                createdAt: Date.now(),
                num_manager: this.num_manager,
              });

            this.loadingController.dismiss();
            this.router.navigate(['/home']);
          });
      })
      .catch((err) => {
        this.loadingController.dismiss();
      });
  }

  uploadAadhar() {
    this.uploadService
      .selectImagefromCamera()
      .then((data) => console.log(data));
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
      message: 'Creating Sub Admin ...',
      spinner: 'crescent',
    });
    await loading.present();
  }
}
