import { Component } from '@angular/core';
import { AbstractBackNavigationPage } from '../../utils/abstract-back-navigation';
import { BackNavigationService } from '../../services/back-navigation.service';

@Component({
  selector: 'app-searches',
  templateUrl: 'searches.page.html',
  styleUrls: ['searches.page.scss'],
})
export class SearchesPage extends AbstractBackNavigationPage {

  constructor(backNavigationService: BackNavigationService) {
    super(backNavigationService, { toHome: true, inRoot: false });
  }

}
