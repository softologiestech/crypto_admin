import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  routes: any = [
    {
      name: 'Create Sub Admin',
      route: 'create_sub_admin',
    },
    {
      name: 'Create Manager',
      route: 'create_manager',
    },
    {
      name: 'Create Sub Manager',
      route: 'create_sub_manager',
    },
    {
      name: 'Create User',
      route: 'create_user',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
