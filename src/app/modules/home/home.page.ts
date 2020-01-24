import { Component } from '@angular/core';
import { AbstractBackNavigationPage } from '../../utils/abstract-back-navigation';
import { BackNavigationService } from '../../services/back-navigation.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage extends AbstractBackNavigationPage {

  constructor(backNavigationService: BackNavigationService) {
    super(backNavigationService, { toHome: false, inRoot: true });
  }

}
