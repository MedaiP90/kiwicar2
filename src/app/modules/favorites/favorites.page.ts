import { Component, OnInit } from '@angular/core';
import { AbstractGoToTopPage } from 'src/app/utils/abstract-go-to-top-page';
import { ComparisonService } from 'src/app/services/comparison.service';
import { LoadingController } from '@ionic/angular';
import { FavoritesService } from 'src/app/services/favorites.service';
import { IModel } from 'src/app/interfaces/model.interface';

@Component({
  selector: 'app-favorites',
  templateUrl: 'favorites.page.html',
  styleUrls: ['favorites.page.scss'],
})
export class FavoritesPage extends AbstractGoToTopPage implements OnInit {

  public models: IModel[];
  public favouritesService: FavoritesService;

  private loader: HTMLIonLoadingElement;

  constructor(
    favouritesService: FavoritesService,
    private comparisonsService: ComparisonService,
    private loadingController: LoadingController
  ) {
    super();
    this.favouritesService = favouritesService;
    this.loader = undefined;
    this.models = [];
  }

  public async ngOnInit(): Promise<void> {
    this.loader = await this.loadingController.create({ message: 'Loading...' });

    await this.loader.present();
    this.models = this.order(await this.favouritesService.getCarsFromFavourites());
    await this.loader.dismiss();
  }

  public get disabled(): boolean {
    return this.comparisonsService.comparison.length === 0;
  }

  private order(array: IModel[]): IModel[] {
    // tslint:disable-next-line: triple-equals
    return array == undefined
      ? []
      : array.sort((model1: IModel, model2: IModel) =>
        model1.name.toLowerCase().localeCompare(model2.name.toLowerCase())
    );
  }

}
