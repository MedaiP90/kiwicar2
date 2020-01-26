import { Component, OnInit } from '@angular/core';
import { AbstractBackNavigationPage } from '../../utils/abstract-back-navigation';
import { BackNavigationService } from '../../services/back-navigation.service';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';
import { DataFetcherService } from 'src/app/services/data-fetcher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage extends AbstractBackNavigationPage implements OnInit {

  public manufacturers;

  constructor(
    backNavigationService: BackNavigationService,
    private popoverController: PopoverController,
    private dataFetchService: DataFetcherService,
    private router: Router
  ) {
    super(backNavigationService, { toHome: false, inRoot: true });
  }

  public ngOnInit(): void {
    this.manufacturers = this.dataFetchService.AllManufacturers;
  }

  public async presentPopover() {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      translucent: true
    });

    return await popover.present();
  }

  public async openManufacturer(manufacturer: string) {
    this.dataFetchService.setSelectedManufacturer(manufacturer);
    await this.router.navigate(['models', 'models']);
  }

}
