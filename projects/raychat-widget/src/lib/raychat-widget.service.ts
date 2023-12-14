import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RaychatWidgetService {
  constructor() {}

  install(token: string, type: string = 'normal') {
    if (!token) {
      console.error('Token for raychat is not provided.');
      return;
    }
    if (type && type !== 'normal') {
      console.warn('Invalid type for raychat. using type normal instead');
      type = 'normal';
    }

    // Set the token as a global variable on the window object
    (window as any).RAYCHAT_TOKEN = token;

    if (type === 'normal') {
      const script: HTMLScriptElement = document.createElement('script');
      script.src = 'https://widget-react.raychat.io/install/widget.js';
      script.type = 'text/javascript';
      script.async = true;
      // this.scriptElement.defer = true;

      document.head.appendChild(script);
    }
  }
}
