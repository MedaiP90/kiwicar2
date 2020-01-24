import { Component, OnInit } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateConfigService } from './services/translate-config.service';
import { AppVersion } from '@ionic-native/app-version/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public appPages = [
    {
      title: 'MENU.home',
      url: '/home',
      icon: 'home'
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
  public version: string;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translationConfigService: TranslateConfigService,
    private menuController: MenuController,
    private appVersion: AppVersion
  ) {
    this.initializeApp();
    this.version = '';
  }

  private initializeApp(): void {
    this.platform.ready().then(() => {
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('#FFFFFF');
      this.statusBar.styleDefault();

      // Translate
      this.translationConfigService.setTranslation();

      this.splashScreen.hide();
    });
  }

  public async closeMenu(): Promise<boolean> {
    return this.menuController.close();
  }

  public async ngOnInit(): Promise<void> {
    // Get app version
    const versionCode = await this.appVersion.getVersionCode();
    const versionNumber = await this.appVersion.getVersionNumber();
    this.version = `${versionNumber} - build ${versionCode}`;
  }
}
