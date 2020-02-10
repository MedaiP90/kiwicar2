import { Component, OnInit } from '@angular/core';
import { Plugins, PluginListenerHandle } from '@capacitor/core';
import { PopoverController, LoadingController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';
import { DataFetcherService } from 'src/app/services/data-fetcher.service';
import { Router } from '@angular/router';
import { IManufacturer } from 'src/app/interfaces/manufacturer.interface';
import { AbstractGoToTopPage } from 'src/app/utils/abstract-go-to-top-page';

const { App } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage extends AbstractGoToTopPage implements OnInit {

  public manufacturers;

  private loader: HTMLIonLoadingElement;
  private handler: PluginListenerHandle;

  constructor(
    private popoverController: PopoverController,
    private dataFetchService: DataFetcherService,
    private router: Router,
    private loadingController: LoadingController
  ) {
    super();
    this.loader = undefined;
    this.handler = undefined;
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
}
