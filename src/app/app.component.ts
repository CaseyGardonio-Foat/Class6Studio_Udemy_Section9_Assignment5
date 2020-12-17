import { Component, OnInit } from '@angular/core';
import { UsersUpdate } from './users-update.service';
import { CounterService } from './counter.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersUpdate]
})
export class AppComponent implements OnInit {
  newValue: number;
  counterValue: number = 0;

  constructor(private counterService: CounterService){
  //   this.counterService.counterUpdate
  //   .subscribe(this.newValue: number)=>{
  //       this.counterValue = newValue;
  //     }
  //   )
  }

  ngOnInit() {}
  
}
