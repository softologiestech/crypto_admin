import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  cameraImage: any;
  imageUrl: string;

  constructor(private camera: Camera, private storage: AngularFireStorage) {}

  async selectImagefromCamera() {
    const options: CameraOptions = {
      quality: 60,
      targetHeight: 500,
      targetWidth: 500,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
    };

    const result = await this.camera.getPicture(options);
    return `data:image/jpeg;base64,${result}`;
  }

  async uploadAadhar(image: string) {
    const filePath = this.randomStr(30, '123456abcdef');

    const task = await this.storage.storage
      .ref(`aadhar/${filePath}`)
      .putString(image, 'data_url');

    const url = await task.ref.getDownloadURL();
    return url;
  }

  async uploadPan(image: string) {
    const filePath = this.randomStr(30, '123456abcdef');

    const task = await this.storage.storage
      .ref(`pan/${filePath}`)
      .putString(image, 'data_url');

    const url = await task.ref.getDownloadURL();
    return url;
  }

  async selectImagefromGallery() {
    const options: CameraOptions = {
      quality: 60,
      targetHeight: 500,
      targetWidth: 500,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
    };

    const result = await this.camera.getPicture(options);
    return `data:image/jpeg;base64,${result}`;
  }

  randomStr(len, arr) {
    var ans = '';
    for (var i = len; i > 0; i--) {
      ans += arr[Math.floor(Math.random() * arr.length)];
    }
    return ans;
  }

  async getUrl(task: firebase.default.storage.UploadTaskSnapshot) {
    const url = await task.ref.getDownloadURL();
    this.imageUrl = url;
    // console.log(this.imageUrl);
  }
}
