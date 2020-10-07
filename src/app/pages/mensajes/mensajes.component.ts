import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../service/websocket.service';
import { Usuario } from '../../class/usuario';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  usuario: Usuario;
  constructor(private wsService: WebsocketService) { }

  ngOnInit(): void {
    this.usuario = this.wsService.getUsuario();
  }

  exit(){
    this.wsService.logoutWS();
  }

}
