import { EventEmitter, Output } from '@angular/core'

export class CounterService {
    @Output() counterUpdate = new EventEmitter<number>();
    counterValue: number = 0

    onStatusChange(){
        this.counterValue++;
        console.log(`status change registered: ${this.counterValue}`); //this is unsatisfactory
        this.counterUpdate.emit(this.counterValue)
    }
}
  