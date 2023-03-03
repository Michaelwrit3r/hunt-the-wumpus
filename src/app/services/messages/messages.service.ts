import { Injectable } from '@angular/core';
import { Subject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  subject$ = new Subject<string>();

  constructor() { }

  messageListener() {
    return this.subject$;
  }

  triggerMessage(text: string) {
    this.subject$.next(text);
  }
}
