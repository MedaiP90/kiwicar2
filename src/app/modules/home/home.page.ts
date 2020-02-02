import { Component, OnInit } from '@angular/core';
import { Plugins, PluginListenerHandle } from '@capacitor/core';
import { PopoverController, LoadingController, AlertController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';
import { DataFetcherService } from 'src/app/services/data-fetcher.service';
import { Router } from '@angular/router';
import { IManufacturer } from 'src/app/interfaces/manufacturer.interface';
import { TranslateService } from '@ngx-translate/core';

const { App } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public manufacturers;

  private loader: HTMLIonLoadingElement;
  private handler: PluginListenerHandle;
  private confirmExitAlert: HTMLIonAlertElement;

  constructor(
    private popoverController: PopoverController,
    private dataFetchService: DataFetcherService,
    private router: Router,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private translateService: TranslateService
  ) {
    this.loader = undefined;
    this.handler = undefined;
    this.confirmExitAlert = undefined;
  }

  public async ngOnInit(): Promise<void> {
    this.loader = await this.loadingController.create({ message: 'Loading...' });

    await this.loader.present();
    this.manufacturers = this.dataFetchService.AllManufacturers.sort(
      (m1: IManufacturer, m2: IManufacturer) => m1.name.toLowerCase().localeCompare(m2.name.toLowerCase())
    );
    await this.loader.dismiss();
  }

  public ionViewDidEnter() {
    this.handler = App.addListener('backButton', () => App.exitApp());
  }

  public ionViewDidLeave() {
    if (this.handler !== undefined) {
      this.handler.remove();
    }
  }

  public async presentPopover() {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      translucent: true
    });

    return await popover.present();
  }

  public async openManufacturer(manufacturer: IManufacturer) {
    this.dataFetchService.setSelectedManufacturer(manufacturer);
    await this.router.navigate(['models', 'models']);
  }

}
