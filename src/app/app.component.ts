import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform, MenuController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { TranslateConfigService } from './services/translate-config.service';

const { SplashScreen } = Plugins;

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
    private statusBar: StatusBar,
    private translationConfigService: TranslateConfigService,
    private menuController: MenuController
  ) {
    this.initializeApp();
  }

  private initializeApp(): void {
    this.platform.ready().then(async () => {
      this.statusBar.overlaysWebView(true);
      this.statusBar.styleBlackTranslucent();

      // Translate
      this.translationConfigService.setTranslation();

      await this.hideSplash();
    });
  }

  public async closeMenu(): Promise<boolean> {
    return this.menuController.close();
  }

  private async hideSplash(): Promise<void> {
    try {
        await SplashScreen.hide();
    } catch (error) {
        console.error('error hiding splash screen', error);
    }
  }
}
