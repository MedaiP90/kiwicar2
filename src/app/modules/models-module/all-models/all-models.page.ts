import { Component, OnInit } from '@angular/core';
import { DataFetcherService } from '../../../services/data-fetcher.service';
import { IModel } from 'src/app/interfaces/model.interface';
import { ComparisonService } from 'src/app/services/comparison.service';
import { LoadingController } from '@ionic/angular';
import { AbstractGoToTopPage } from 'src/app/utils/abstract-go-to-top-page';

@Component({
  selector: 'app-all-models',
  templateUrl: './all-models.page.html',
  styleUrls: ['./all-models.page.scss'],
})
export class AllModelsPage extends AbstractGoToTopPage implements OnInit {

  public models: IModel[];
  public dataFetcherService: DataFetcherService;

  private loader: HTMLIonLoadingElement;

  constructor(
    dataFetcherService: DataFetcherService,
    private comparisonsService: ComparisonService,
    private loadingController: LoadingController
  ) {
    super();
    this.models = [];
    this.loader = undefined;
    this.dataFetcherService = dataFetcherService;
  }

  public async ngOnInit() {
    this.loader = await this.loadingController.create({ message: 'Loading...' });

    await this.loader.present();
    this.models = this.order(this.dataFetcherService.AllModels);
    await this.loader.dismiss();
  }

  public get filteredModels(): IModel[] {
    return this.dataFetcherService.allModelsFilter === ''
      ? this.models
      : this.models.filter((model: IModel) =>
          model.name.toLocaleLowerCase()
            .includes(this.dataFetcherService.allModelsFilter.toLocaleLowerCase())
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
