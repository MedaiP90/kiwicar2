import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateConfigService } from './services/translate-config.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'MENU.home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'MENU.models-comparison',
      url: '/models/all-models',
      icon: 'checkmark'
    },
    {
      title: 'MENU.favorites',
      url: '/favorites',
      icon: 'star'
    },
    {
      title: 'MENU.saved-searches',
      url: '/searches',
      icon: 'bookmark'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translationConfigService: TranslateConfigService,
    private menuController: MenuController
  ) {
    this.initializeApp();
  }

  private initializeApp(): void {
    this.platform.ready().then(() => {
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('#9C9EA3');
      this.statusBar.styleBlackOpaque();

      // Translate
      this.translationConfigService.setTranslation();

      this.splashScreen.hide();
    });
  }

  public async closeMenu(): Promise<boolean> {
    return this.menuController.close();
  }
}
