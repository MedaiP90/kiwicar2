import { Component, OnInit } from '@angular/core';
import { DataFetcherService } from 'src/app/services/data-fetcher.service';
import { IModel } from 'src/app/interfaces/model.interface';
import { IManufacturer } from 'src/app/interfaces/manufacturer.interface';
import { ComparisonService } from 'src/app/services/comparison.service';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AbstractGoToTopPage } from 'src/app/utils/abstract-go-to-top-page';

@Component({
  selector: 'app-models',
  templateUrl: './models.page.html',
  styleUrls: ['./models.page.scss'],
})
export class ModelsPage extends AbstractGoToTopPage implements OnInit {

  public selectedManufacturer: IManufacturer;
  public models: IModel[];

  private loader: HTMLIonLoadingElement;

  constructor(
    private dataFetchService: DataFetcherService,
    private comparisonsService: ComparisonService,
    private loadingController: LoadingController,
    private route: ActivatedRoute
  ) {
    super();
    this.selectedManufacturer = undefined;
    this.models = [];
    this.loader = undefined;
  }

  public async ngOnInit() {
    this.loader = await this.loadingController.create({ message: 'Loading...' });

    await this.loader.present();
    const manufacturerName = this.route.snapshot.paramMap.get('house');
    this.selectedManufacturer = this.dataFetchService.getManufacturerByName(manufacturerName);
    this.models = this.dataFetchService.getModelsByManufacturer(this.selectedManufacturer)
      .sort((model1: IModel, model2: IModel) => model1.name.toLowerCase().localeCompare(model2.name.toLowerCase()));
    await this.loader.dismiss();
  }

  public get disabled(): boolean {
    return this.comparisonsService.comparison.length === 0;
  }

}
