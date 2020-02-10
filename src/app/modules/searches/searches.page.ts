import { Component } from '@angular/core';
import { AbstractGoToTopPage } from 'src/app/utils/abstract-go-to-top-page';

@Component({
  selector: 'app-searches',
  templateUrl: 'searches.page.html',
  styleUrls: ['searches.page.scss'],
})
export class SearchesPage extends AbstractGoToTopPage {

  constructor() {
    super();
  }

}
