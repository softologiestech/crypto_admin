import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss'],
})
export class ManagerComponent implements OnInit {
  routes: any = [
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
