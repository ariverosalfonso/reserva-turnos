export interface AlertInfo {
    title?: string;
    msg?: string;
    msgList?: CustomMessage;
    showIcon?: boolean;
    iconName?: string;
    iconColor?: string;
    loadingColor?: string;
    buttons?: ButtonAlert[];
}
export interface LoadingInfo {
  title: string;
  msg: string;
  spinnerColor?: string;
  progressBar?: boolean;
  progressBarColor?: string;
  progressBarValue?: number;
}

export interface ButtonAlert {
    buttonText: string;
    buttonTextColor?: 'light' | 'dark';
    buttonHandler: any;
    buttonColor: string;
    buttonIcon?: string;
}

export interface CustomMessage {
    msg: string;
    icon: string;
    iconSlot: string;
}