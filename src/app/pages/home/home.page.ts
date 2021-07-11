import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  type: string = localStorage.getItem('type');

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  logout() {
    this.userService.logout();
    localStorage.clear();

    this.router.navigate(['/login']);
  }
}
