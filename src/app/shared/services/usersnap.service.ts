import { Injectable } from '@angular/core';

declare const window: Window & { onUsersnapCXLoad?: (api: any) => void };

@Injectable({
  providedIn: 'root',
})
export class UsersnapService {
  initialize(): void {
    let script: HTMLScriptElement | null = null;

    window.onUsersnapCXLoad = (api): void => {
      api.init({
        collectGeoLocation: 'none',
        useLocalStorage: false,
      });
    };

    script = document.createElement('script');
    script.defer = true;
    script.type = 'text/javascript';
    script.src =
      'https://widget.usersnap.com/load/e05a377b-9a8a-4a38-94eb-13534b3546b4?onload=onUsersnapCXLoad';

    document.body.appendChild(script);
  }
}
