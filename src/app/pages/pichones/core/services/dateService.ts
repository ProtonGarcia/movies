import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountdownService {
  private targetDate: Date = new Date('2025-03-01T00:00:00'); // Ajusta la fecha aquí
  private remainingTimeSubject: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([0, 0, 0]); 

  private timer: any;

  constructor() {}

  startCountdown(): void {
    this.timer = setInterval(() => {
      const now = new Date();
      const timeDiff = this.targetDate.getTime() - now.getTime();

      if (timeDiff <= 0) {
        clearInterval(this.timer);
        this.remainingTimeSubject.next([0, 0, 0]);
      } else {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        this.remainingTimeSubject.next([days, hours, minutes]);
      }
    }, 1000);
  }

  stopCountdown(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  getRemainingTime(): Observable<number[]> {
    return this.remainingTimeSubject.asObservable();
  }
}
