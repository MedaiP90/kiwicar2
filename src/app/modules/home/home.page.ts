import { Component, OnInit } from '@angular/core';
import { AbstractBackNavigationPage } from '../../utils/abstract-back-navigation';
import { BackNavigationService } from '../../services/back-navigation.service';
import { ABARTH, AUDI, KIA, OPEL, SEAT } from 'src/app/interfaces/mockup-logos';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage extends AbstractBackNavigationPage implements OnInit {

  public mockup;

  constructor(
    backNavigationService: BackNavigationService,
    private popoverController: PopoverController
  ) {
    super(backNavigationService, { toHome: false, inRoot: true });
  }

  public ngOnInit(): void {
    this.mockup = [
      {
        name: 'Abarth',
        logo: ABARTH,
        modelsAmount: 1,
        models: ['585']
      },
      {
        name: 'Audi',
        logo: AUDI,
        modelsAmount: 1,
        models: ['A3']
      },
      {
        name: 'Kia',
        logo: KIA,
        modelsAmount: 1,
        models: ['Rio']
      },
      {
        name: 'Opel',
        logo: OPEL,
        modelsAmount: 1,
        models: ['Corsa']
      },
      {
        name: 'Seat',
        logo: SEAT,
        modelsAmount: 1,
        models: ['Ibiza']
      }
    ];
  }

  public async presentPopover() {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      translucent: true
    });

    popover.onDidDismiss().then((result) => {
      if (result.data !== undefined) {
        // TODO: implement proper search save
        console.log('Searching:', result.data);
      }
    });

    await popover.present();
  }

}
