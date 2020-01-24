import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent {

  constructor(
    private popoverController: PopoverController,
    private router: Router,
  ) { }

  public async dismissPopover(startSearch: boolean) {
    if (startSearch) {
      // TODO: navigate to results page with parameters
      console.log('Starting search');
      await this.router.navigate(['search']);
    }
    await this.popoverController.dismiss(!startSearch ? 'Dummy query' : undefined);
  }

}
