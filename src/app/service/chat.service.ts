import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    public wsService: WebsocketService
  ) { }


  sendMessage(message: string){

    const payload = {
      de: 'Yoe',
      cuerpo: message
    }

    this.wsService.emit('mensaje', payload);

  }

  getMessage(){

    return this.wsService.listen('mensaje-nuevo');
  }
}
