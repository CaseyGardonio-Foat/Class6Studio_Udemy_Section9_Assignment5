import { Component, OnInit } from '@angular/core';
import { UsersUpdate } from './users-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersUpdate]
})
export class AppComponent {
  counterValue: number = 0;

  constructor(private usersUpdate: UsersUpdate){}

  onCounterUpdate(eventData: number) {
    console.log(`status change registered: ${this.counterValue}`);
    this.counterValue = eventData;
  }
}
