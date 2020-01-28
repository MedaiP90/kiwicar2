import { Component, OnInit } from '@angular/core';
import { AbstractBackNavigationPage } from '../../../utils/abstract-back-navigation';
import { BackNavigationService } from '../../../services/back-navigation.service';
import { DataFetcherService } from 'src/app/services/data-fetcher.service';
import { IModel } from 'src/app/interfaces/model.interface';
import { IManufacturer } from 'src/app/interfaces/manufacturer.interface';

@Component({
  selector: 'app-models',
  templateUrl: './models.page.html',
  styleUrls: ['./models.page.scss'],
})
export class ModelsPage extends AbstractBackNavigationPage implements OnInit {

  public selectedManufacturer: IManufacturer;
  public models: IModel[];

  constructor(
    backNavigationService: BackNavigationService,
    private dataFetchService: DataFetcherService
  ) {
    super(backNavigationService, { toHome: false, inRoot: false });
    this.selectedManufacturer = undefined;
    this.models = [];
  }

  public ngOnInit() {
    this.selectedManufacturer = this.dataFetchService.getSelectedManufacturer();
    this.models = this.dataFetchService.getModelsByManufacturer(this.selectedManufacturer);
  }

}
