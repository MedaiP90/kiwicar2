import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { IModel } from '../interfaces/model.interface';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private favCarsKey: string;
  private favSearchesKey: string;

  constructor() {
    this.favCarsKey = 'favCars';
    this.favSearchesKey = 'favSearches';
  }

  public async saveCarToFavourites(car: IModel): Promise<void> {
    let saved = await this.getCarsFromFavourites();

    // tslint:disable-next-line: triple-equals
    if (saved == undefined) { saved = []; }

    if (this.isNotModelPresent(car, saved)) {
      saved.push(car);
      await Storage.set({
        key: this.favCarsKey,
        value: JSON.stringify(saved)
      });
    }
  }

  public async removeCarFromFavourites(car: IModel): Promise<void> {
    const saved = await this.getCarsFromFavourites();

    // tslint:disable-next-line: triple-equals
    if (saved == undefined) { return; }

    const index = saved.findIndex((model: IModel) => model.id === car.id);

    if (index > -1) {
      saved.splice(index, 1);
      await Storage.set({
        key: this.favCarsKey,
        value: JSON.stringify(saved)
      });
    }
  }

  public async getCarsFromFavourites(): Promise<IModel[]> {
    const ret = await Storage.get({ key: this.favCarsKey });

    return JSON.parse(ret.value) as IModel[];
  }

  public async isFav(car: IModel): Promise<boolean> {
    return !this.isNotModelPresent(car, await this.getCarsFromFavourites());
  }

  private isNotModelPresent(item: IModel, list: IModel[]): boolean {
    // tslint:disable-next-line: triple-equals
    if (list == undefined) { return true; }

    return list.findIndex((m: IModel) => m.id === item.id) === -1;
  }
}
