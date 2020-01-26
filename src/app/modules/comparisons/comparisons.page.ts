import { Component } from '@angular/core';
import { BackNavigationService } from 'src/app/services/back-navigation.service';
import { AbstractBackNavigationPage } from 'src/app/utils/abstract-back-navigation';

@Component({
  selector: 'app-comparisons',
  templateUrl: './comparisons.page.html',
  styleUrls: ['./comparisons.page.scss'],
})
export class ComparisonsPage extends AbstractBackNavigationPage {

  constructor(backNavigationService: BackNavigationService) {
    super(backNavigationService, { toHome: false, inRoot: false });
  }

}
