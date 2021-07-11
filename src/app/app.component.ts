import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  type: string = localStorage.getItem('type');

  constructor(
    private userService: UserService,
    private router: Router,
    private menuController: MenuController
  ) {
    console.log(this.type);
  }

  logout() {
    this.userService.logout();
    localStorage.clear();

    this.router.navigate(['/']);
    this.menuController.close();
  }
}
