import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
type SwalIcon = 'success' | 'warning' | 'info' | 'question' | 'error';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private subject = new Subject<any>();
  public subscription: any;

  constructor() {}

  sendMessage(message: any) {
    this.subject.next(message);
  }

  getData() {
    return this.subject.asObservable();
  }
}
