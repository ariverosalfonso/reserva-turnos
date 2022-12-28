import { Component } from '@angular/core';
import { AlertControllerService } from '../services/alert-controller.service';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

  constructor(public alertController: AlertControllerService) {}
}


