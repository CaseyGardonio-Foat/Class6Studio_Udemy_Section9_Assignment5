import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersUpdate } from '../users-update.service'

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent {
  @Input() users: string[];
  @Output() userSetToActive = new EventEmitter<number>();
 
  constructor(private usersUpdate: UsersUpdate){}

  onSetToActive(id: number) {
    console.log(`user ${id} set to active`);
    this.usersUpdate.onSetToActive(id);
    this.userSetToActive.emit(id)
  }
  
}
