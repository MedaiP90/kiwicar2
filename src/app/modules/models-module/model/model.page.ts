import { Component, OnInit } from '@angular/core';
import { DataFetcherService } from 'src/app/services/data-fetcher.service';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { IModel } from 'src/app/interfaces/model.interface';
import { AbstractGoToTopPage } from 'src/app/utils/abstract-go-to-top-page';

@Component({
  selector: 'app-model',
  templateUrl: './model.page.html',
  styleUrls: ['./model.page.scss'],
})
export class ModelPage extends AbstractGoToTopPage implements OnInit {

  public loadedModel: IModel;
  public keys: string[];

  private loader: HTMLIonLoadingElement;

  constructor(
    private dataFetchService: DataFetcherService,
    private loadingController: LoadingController,
    private route: ActivatedRoute
  ) {
    super();
    this.loader = undefined;
    this.keys = [];
    this.loadedModel = undefined;
  }

  public async ngOnInit(): Promise<void> {
    this.loader = await this.loadingController.create({ message: 'Loading...' });

    await this.loader.present();
    const manufacturerName = this.route.snapshot.paramMap.get('house');
    const modelName = this.route.snapshot.paramMap.get('model');
    this.loadedModel = this.dataFetchService.getModelFromManufacturerAndId(manufacturerName, modelName);
    this.keys = Object.keys(this.loadedModel.data);
    await this.loader.dismiss();
  }
}
