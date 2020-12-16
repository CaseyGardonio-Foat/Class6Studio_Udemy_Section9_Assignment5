import { EventEmitter, Output } from '@angular/core'

export class CounterService {
    @Output() counterUpdate = new EventEmitter<number>();
    counterValue: number = 0

    onStatusChange(){
        this.counterValue++;
        this.counterUpdate.emit(this.counterValue)
    }
}
  