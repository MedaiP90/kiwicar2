import { Component } from '@angular/core';
import { AbstractGoToTopPage } from 'src/app/utils/abstract-go-to-top-page';

@Component({
  selector: 'app-favorites',
  templateUrl: 'favorites.page.html',
  styleUrls: ['favorites.page.scss'],
})
export class FavoritesPage extends AbstractGoToTopPage {

  constructor() {
    super();
  }

}
