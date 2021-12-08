import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {io} from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket:any;

  sendMessage(message:any, username:any) {
    this.socket.emit('add-message', message, username);
    this.socket.emit('users');
  }

  saveUsername(username:any) {
    this.socket.emit('saveUser', username);
  }

  getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(environment.apiUrl);
      this.socket.on('message', (data:any) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }

  getUsers() {
    let observable = new Observable(observer => {
      this.socket = io(environment.apiUrl);
      this.socket.on('users', (data:any) => {
        let myArray = [];

        for (let i = 0; i < data.users.length; i++) {
          let user = {
            username: String
          }
          user.username = data.users[i];
          myArray.push(user);
        }

        observer.next(myArray);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }

  exitSession(username:any) {
    this.socket.emit('exitSession', username);
  }
}
