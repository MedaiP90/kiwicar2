import { Component, OnInit } from '@angular/core';
import { AbstractBackNavigationPage } from 'src/app/utils/abstract-back-navigation';
import { BackNavigationService } from '../../../services/back-navigation.service';
import { DataFetcherService } from '../../../services/data-fetcher.service';
import { IModel } from 'src/app/interfaces/model.interface';
import { ComparisonService } from 'src/app/services/comparison.service';

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
    private dataFetcherService: DataFetcherService,
    private comparisonsService: ComparisonService
  ) {
    super(backNavigationService, { toHome: true, inRoot: false });
    this.textFilter = '';
    this.models = [];
  }

  public ngOnInit() {
    this.models = this.order(this.dataFetcherService.AllModels);
  }

  public get filteredModels(): IModel[] {
    return this.textFilter === ''
      ? this.models
      : this.models.filter((model: IModel) =>
          model.name.toLocaleLowerCase().includes(this.textFilter.toLocaleLowerCase())
        );
  }

  public get disabled(): boolean {
    return this.comparisonsService.comparison.length === 0;
  }

  private order(array: IModel[]): IModel[] {
    return array.sort((model1: IModel, model2: IModel) =>
      model1.name.toLowerCase().localeCompare(model2.name.toLowerCase())
    );
  }

}
