import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = '';
  password: string = '';
  type: string = 'admin';
  loginData: any = {};
  sub: any;

  constructor(
    private userService: UserService,
    private router: Router,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {}

  ionViewDidLeave() {
    this.sub.unsubscribe();
  }

  login() {
    if (this.username !== '' && this.password != '') {
      this.presentLoading();

      this.sub = this.userService
        .findData(this.type, this.username)
        .valueChanges()
        .subscribe((doc: any) => {
          this.loginData = doc;
          // console.log(this.loginData[0]);

          this.userService
            .login(doc[0].email, this.password)
            .then((data) => {
              // console.log(data.user);
              localStorage.setItem('uid', data.user.uid);
              localStorage.setItem('type', doc[0].type);
              localStorage.setItem('id', doc[0].id);

              this.loadingController.dismiss();
              this.router.navigate(['/home']);
            })
            .catch((err) => {
              console.log(err);
              this.loadingController.dismiss();
            });
        });
    }
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading ...',
      spinner: 'crescent',
    });
    await loading.present();
  }
}
