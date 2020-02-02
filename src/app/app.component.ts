import { Component } from '@angular/core';
import { Platform, MenuController } from '@ionic/angular';
import { Plugins, StatusBarStyle } from '@capacitor/core';
import { TranslateConfigService } from './services/translate-config.service';

const { SplashScreen, StatusBar } = Plugins;

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
    },
    {
      title: 'MENU.comparisons',
      url: '/comparisons',
      icon: 'git-compare'
    }
  ];

  constructor(
    private platform: Platform,
    private translationConfigService: TranslateConfigService,
    private menuController: MenuController
  ) {
    this.initializeApp();
  }

  private initializeApp(): void {
    this.platform.ready().then(async () => {
      // Status bar
      await this.initializeStatusBar();

      // Translate
      this.translationConfigService.setTranslation();

      await this.hideSplash();
    });
  }

  private async initializeStatusBar(): Promise<void> {
    try {
      await StatusBar.setStyle({ style: StatusBarStyle.Dark });
    } catch (error) {
      console.error(this.constructor.name, 'error setting status bar style', error);
    }

    try {
      await StatusBar.setBackgroundColor({ color: '#9C9EA3' });
    } catch (error) {
      console.error(this.constructor.name, 'error setting status bar color', error);
    }
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
