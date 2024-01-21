import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RaychatWidgetService {
  constructor() {}

  install(token: string, type: string = 'NORMAL') {
    const validTypes = ['NORMAL', 'SEO_FRIENDLY', 'FAST_LOAD'];
    if (!token || token.length === 0) {
      console.error('Token for raychat widget is not provided.');
      return;
    }
    if (!validTypes.includes(type.toUpperCase())) {
      console.warn('Invalid type for raychat. using type NORMAL instead');
      type = 'NORMAL';
    }

    // Set the token as a global variable on the window object
    (window as any).RAYCHAT_TOKEN = token;

    // Set the loding type for widget
    if (type.toUpperCase() === 'SEO_FRIENDLY')
      (window as any).LOAD_TYPE = "SEO_FRIENDLY";
    else if (type.toUpperCase() === 'FAST_LOAD')
      (window as any).LOAD_TYPE = "FAST_LOAD";

    // Set the script to the head
    const script: HTMLScriptElement = document.createElement('script');
    script.src = 'https://widget-react.raychat.io/install/widget.js';
    script.type = 'text/javascript';
    script.async = true;
    // this.scriptElement.defer = true;
    document.head.appendChild(script);
  }
}
