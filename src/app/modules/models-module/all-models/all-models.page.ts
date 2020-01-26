import { Component, OnInit } from '@angular/core';
import { AbstractBackNavigationPage } from 'src/app/utils/abstract-back-navigation';
import { BackNavigationService } from '../../../services/back-navigation.service';
import { DataFetcherService } from '../../../services/data-fetcher.service';
import { IModel } from 'src/app/interfaces/model.interface';

@Component({
  selector: 'app-all-models',
  templateUrl: './all-models.page.html',
  styleUrls: ['./all-models.page.scss'],
})
export class AllModelsPage extends AbstractBackNavigationPage implements OnInit {

  public textFilter: string;
  public models: IModel[];

  constructor(
    backNavigationService: BackNavigationService,
    private dataFetcherService: DataFetcherService
  ) {
    super(backNavigationService, { toHome: true, inRoot: false });
    this.textFilter = '';
    this.models = [];
  }

  public ngOnInit() {
    this.models = this.dataFetcherService.AllModels;
  }

  public get filteredModels(): IModel[] {
    return this.textFilter === ''
      ? this.models
      : this.models.filter((model: IModel) =>
          model.name.toLocaleLowerCase().includes(this.textFilter.toLocaleLowerCase())
        );
  }

}
