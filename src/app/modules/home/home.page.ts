import { Component, OnInit } from '@angular/core';
import { AbstractBackNavigationPage } from '../../utils/abstract-back-navigation';
import { BackNavigationService } from '../../services/back-navigation.service';
import { PopoverController, LoadingController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';
import { DataFetcherService } from 'src/app/services/data-fetcher.service';
import { Router } from '@angular/router';
import { IManufacturer } from 'src/app/interfaces/manufacturer.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage extends AbstractBackNavigationPage implements OnInit {

  public manufacturers;

  private loader: HTMLIonLoadingElement;

  constructor(
    backNavigationService: BackNavigationService,
    private popoverController: PopoverController,
    private dataFetchService: DataFetcherService,
    private router: Router,
    private loadingController: LoadingController
  ) {
    super(backNavigationService, { toHome: false, inRoot: true });
    this.loader = undefined;
  }

  public async ngOnInit(): Promise<void> {
    this.loader = await this.loadingController.create({ message: 'Loading...' });

    await this.loader.present();
    this.manufacturers = this.dataFetchService.AllManufacturers;
    await this.loader.dismiss();
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
