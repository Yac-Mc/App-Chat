import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MensajesComponent } from './pages/mensajes/mensajes.component';

const ROUTES: Routes = [
  { path: '', component: LoginComponent},
  { path: 'mensajes', component: MensajesComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [ RouterModule.forRoot( ROUTES ) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
