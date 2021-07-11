import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-admin',
  templateUrl: './sub-admin.component.html',
  styleUrls: ['./sub-admin.component.scss'],
})
export class SubAdminComponent implements OnInit {
  routes: any = [
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
