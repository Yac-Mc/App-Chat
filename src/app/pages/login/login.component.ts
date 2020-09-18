import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../service/websocket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = '';

  constructor(public wsService: WebsocketService) { }

  ngOnInit(): void {
  }

  login(){
    this.wsService.loginWS(this.userName);
  }

}
