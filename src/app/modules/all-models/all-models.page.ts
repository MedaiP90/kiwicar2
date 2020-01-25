import { Component, OnInit } from '@angular/core';
import { AbstractBackNavigationPage } from 'src/app/utils/abstract-back-navigation';
import { BackNavigationService } from '../../services/back-navigation.service';

@Component({
  selector: 'app-all-models',
  templateUrl: './all-models.page.html',
  styleUrls: ['./all-models.page.scss'],
})
export class AllModelsPage extends AbstractBackNavigationPage implements OnInit {

  public textFilter: string;

  constructor(
    backNavigationService: BackNavigationService
  ) {
    super(backNavigationService, { toHome: true, inRoot: false });
    this.textFilter = '';
  }

  ngOnInit() {
  }

}
