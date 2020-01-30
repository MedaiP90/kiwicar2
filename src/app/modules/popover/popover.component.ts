import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataFetcherService } from 'src/app/services/data-fetcher.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent {

  constructor(
    private popoverController: PopoverController,
    private router: Router,
    private dataFetch: DataFetcherService
  ) { }

  public async dismissPopover(startSearch: boolean) {
    if (startSearch) {
      // TODO: navigate to results page with parameters
      console.log('Starting search');
      this.dataFetch.setQuery('Dummy query');
      await this.router.navigate(['search']);
    }
    await this.popoverController.dismiss();
  }

}
