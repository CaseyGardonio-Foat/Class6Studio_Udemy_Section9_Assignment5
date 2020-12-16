import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersUpdate } from '../users-update.service'

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];
  @Output() userSetToInactive = new EventEmitter<number>();

  constructor(private usersUpdate: UsersUpdate){}

  onSetToInactive(id: number) {
    console.log(`user ${id} set to inactive`);
    this.usersUpdate.onSetToInactive(id);
    this.userSetToInactive.emit(id)
  }
}
