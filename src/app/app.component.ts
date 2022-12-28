import { Component } from '@angular/core';
import { AlertControllerService } from './shared/services/alert-controller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reserva-turnos';
  constructor(public alertController: AlertControllerService) {

  }
}
