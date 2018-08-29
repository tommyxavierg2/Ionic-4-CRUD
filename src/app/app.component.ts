import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import * as firebase from 'firebase/app';
import { firebaseConfig } from './config/credentials';

const { SplashScreen, StatusBar } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor( private platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    firebase.initializeApp(firebaseConfig);
    SplashScreen.hide().catch(error => {
      console.error(error);
    });
    StatusBar.hide().catch(error => {
      console.error(error);
    });
  }
}
