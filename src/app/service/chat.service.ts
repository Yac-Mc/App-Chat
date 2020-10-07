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
      de: this.wsService.getUsuario().nombre,
      cuerpo: message
    };

    this.wsService.emit('mensaje', payload);

  }

  getMessage(){

    return this.wsService.listen('mensaje-nuevo');
  }

  getMessagePrivate(){
    return this.wsService.listen('mensaje-privado');
  }

  getUsersActive(){
    return this.wsService.listen('usuarios-activos');
  }

  emitUsersActive(){
    return this.wsService.emit('obtener-usuarios');
  }
}
