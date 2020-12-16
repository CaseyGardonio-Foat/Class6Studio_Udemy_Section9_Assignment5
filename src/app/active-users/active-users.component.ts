import { Component, OnInit } from '@angular/core';
import { UsersUpdate } from '../users-update.service'

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private usersUpdate: UsersUpdate){}

  ngOnInit() {
    this.users = this.usersUpdate.activeUsers
  }

  onSetToInactive(id: number) {
    console.log(`user ${id} set to inactive`);
    this.usersUpdate.onSetToInactive(id);
  }
}
