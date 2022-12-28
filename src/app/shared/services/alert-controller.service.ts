import { Injectable } from '@angular/core';
import { AlertInfo, ButtonAlert, LoadingInfo } from '../interfaces/alert.interface';

@Injectable({
  providedIn: 'root'
})
export class AlertControllerService {

  showAlert = false;
  loading = false;

  alertInfo: AlertInfo = {
    title: '',
    msg: '',
    showIcon: false,
    iconName: '',
    iconColor: '',
    loadingColor: '',
    buttons: [],
  };

  loadingInfo: LoadingInfo = {
    title: '',
    msg: '',
    spinnerColor: 'primary',
  };

  animationAlert = 'alertFadeIn';
  animationLoading = 'loadingFadeIn';

  /**
   *Method that opens the modal
   *@param alertInfo sets the modal info from outside
   */
  openAlert(alertInfo: AlertInfo) {
    this.animationAlert = 'alertFadeIn';
    this.alertInfo = alertInfo;
    this.showAlert = true;
  }

  /**
   *hides the modal info
   */
  hideAlert() {
    this.animationAlert = 'alertFadeOut';
    setTimeout(() => {
      this.showAlert = false;
    }, 500);
  }

  stopLoading() {
    this.loading = false;
  }

  /**
   *Method that handles the success of a request with an alert
   */
  handleSuccess(msg: string, iconName?: string, title?: string, buttons?: ButtonAlert[]) {
    this.openAlert({
      showIcon: true,
      iconColor: 'success',
      iconName: iconName || 'bi bi-check-circle-fill',
      title: title || 'Felicidades',
      msg,
      buttons: buttons || [
        {
          buttonColor: 'primary',
          buttonText: 'OK',
          buttonHandler: () => {
            this.hideAlert();
          },
        },
      ],
    });
  }

  /**
   *Method that handles error of a request with an alert
   */
  handleError(msg: string, title?: string | null, iconName?: string, iconColor?: string) {
    this.openAlert({
      showIcon: true,
      iconColor: iconColor || 'warning',
      iconName: iconName || 'bx bx-info-circle',
      title: title || 'Error',
      msg,
      buttons: [
        {
          buttonColor: 'button',
          buttonText: 'OK',
          buttonHandler: () => {
            this.hideAlert();
          },
        },
      ],
    });
  }
}
