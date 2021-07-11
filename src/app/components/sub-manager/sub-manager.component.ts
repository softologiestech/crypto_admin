import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-manager',
  templateUrl: './sub-manager.component.html',
  styleUrls: ['./sub-manager.component.scss'],
})
export class SubManagerComponent implements OnInit {
  routes: any = [
    {
      name: 'Create User',
      route: 'create_user',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
