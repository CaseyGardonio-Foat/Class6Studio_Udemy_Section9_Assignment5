import { Component, OnInit } from '@angular/core';
import { UsersUpdate } from '../users-update.service'

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent implements OnInit {
  users: string[];
 
  constructor(private usersUpdate: UsersUpdate){}

  ngOnInit() {
    this.users = this.usersUpdate.inactiveUsers
  }

  onSetToActive(id: number) {
    console.log(`user ${id} set to active`);
    this.usersUpdate.onSetToActive(id);
  }
  
}
