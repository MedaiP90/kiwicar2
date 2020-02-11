// tslint:disable: triple-equals
import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { IModel } from '../interfaces/model.interface';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  public allCarFavs: IModel[] = [];

  private favCarsKey: string;
  private favSearchesKey: string;

  constructor() {
    this.favCarsKey = 'favCars';
    this.favSearchesKey = 'favSearches';
    this.allCarFavs = [];
  }

  public async saveCarToFavourites(car: IModel): Promise<void> {
    if (this.allCarFavs == undefined) { this.allCarFavs = []; }

    if (this.isNotModelPresent(car)) {
      this.allCarFavs.push(car);
      await this.toMemory(this.favCarsKey, JSON.stringify(this.allCarFavs));
    }
  }

  public async removeCarFromFavourites(car: IModel): Promise<void> {
    if (this.allCarFavs == undefined) { return; }

    const index = this.allCarFavs.findIndex((model: IModel) => model.id === car.id);

    if (index > -1) {
      this.allCarFavs.splice(index, 1);
      await this.toMemory(this.favCarsKey, JSON.stringify(this.allCarFavs));
    }
  }

  public isFav(car: IModel): boolean {
    return !this.isNotModelPresent(car);
  }

  public async initFavs(): Promise<void> {
    const ret = await Storage.get({ key: this.favCarsKey });
    this.allCarFavs = ret == undefined
      ? []
      : JSON.parse(ret.value) as IModel[];
  }

  private async toMemory(key: string, value: string): Promise<void> {
    await Storage.set({ key, value });
  }

  private isNotModelPresent(item: IModel): boolean {
    return this.allCarFavs == undefined
      ? true
      : this.allCarFavs.findIndex((m: IModel) => m.id === item.id) === -1;
  }
}
