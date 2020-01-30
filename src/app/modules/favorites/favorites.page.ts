import { Component } from '@angular/core';
import { AbstractBackNavigationPage } from '../../utils/abstract-back-navigation';
import { BackNavigationService } from '../../services/back-navigation.service';

@Component({
  selector: 'app-favorites',
  templateUrl: 'favorites.page.html',
  styleUrls: ['favorites.page.scss'],
})
export class FavoritesPage extends AbstractBackNavigationPage {

  constructor(backNavigationService: BackNavigationService) {
    super(backNavigationService, { toHome: true, inRoot: false });
  }

}
