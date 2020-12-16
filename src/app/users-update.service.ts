import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UsersUpdate {
    activeUsers: string[] = ['Max', 'Anna'];
    inactiveUsers: string[] = ['Chris', 'Manu'];
    counter: number = 0

    constructor(private counterService: CounterService){}

    onSetToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.onStatusChange();
    }

    onSetToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterService.onStatusChange();
    }

}