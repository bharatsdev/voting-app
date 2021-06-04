import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable, Observer } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ChatService {

  constructor(private socket: Socket) { }

  public getMessages = () => {
    return Observable.create((observer: any) => {
      this.socket.on('voting-scores', (message: any) => { 
        observer.next(message);
      });
    });
  }
}
