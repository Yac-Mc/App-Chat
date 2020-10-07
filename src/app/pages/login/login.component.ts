import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebsocketService } from '../../service/websocket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = '';

  constructor(public wsService: WebsocketService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.wsService.loginWS(this.userName).then( () => {
      this.router.navigateByUrl('/mensajes');
    });
  }

}
