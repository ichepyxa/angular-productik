import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  isVisible$ = new BehaviorSubject<boolean>(false);

  open() {
    document.body.classList.add('overflow-hidden');
    this.isVisible$.next(true);
  }

  close() {
    document.body.classList.remove('overflow-hidden');
    this.isVisible$.next(false);
  }

  constructor() {}
}
