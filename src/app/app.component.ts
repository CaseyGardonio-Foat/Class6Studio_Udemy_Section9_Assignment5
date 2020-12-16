import { Component, OnInit } from '@angular/core';
import { UsersUpdate } from './users-update.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersUpdate]
})
export class AppComponent implements OnInit {
  activeUsers: string[]= [];
  inactiveUsers: string[] = [];

  constructor(private usersUpdate: UsersUpdate){}

  ngOnInit() {
    this.activeUsers = this.usersUpdate.activeUsers;
    this.inactiveUsers = this.usersUpdate.inactiveUsers
  }

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
}
