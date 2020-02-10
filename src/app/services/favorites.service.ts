// tslint:disable: triple-equals
import { Injectable, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { IModel } from '../interfaces/model.interface';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class FavoritesService implements OnInit {

  public allCarFavs: IModel[];

  private favCarsKey: string;
  private favSearchesKey: string;

  constructor() {
    this.favCarsKey = 'favCars';
    this.favSearchesKey = 'favSearches';
    this.allCarFavs = [];
  }

  public async ngOnInit(): Promise<void> { await this.initFavs(); }

  public async saveCarToFavourites(car: IModel): Promise<void> {
    if (this.isNotModelPresent(car)) {
      this.allCarFavs.push(car);
      await this.toMemory(this.favCarsKey, JSON.stringify(this.allCarFavs));
    }
  }

  public async removeCarFromFavourites(car: IModel): Promise<void> {
    const index = this.allCarFavs.findIndex((model: IModel) => model.id === car.id);

    if (index > -1) {
      this.allCarFavs.splice(index, 1);
      await this.toMemory(this.favCarsKey, JSON.stringify(this.allCarFavs));
    }
  }

  public isFav(car: IModel): boolean {
    return !this.isNotModelPresent(car);
  }

  private async initFavs(): Promise<void> {
    const ret = await Storage.get({ key: this.favCarsKey });
    this.allCarFavs = ret == undefined
      ? []
      : JSON.parse(ret.value) as IModel[];
  }

  private async toMemory(key: string, value: string): Promise<void> {
    await Storage.set({ key, value });
  }

  private isNotModelPresent(item: IModel): boolean {
    return this.allCarFavs.findIndex((m: IModel) => m.id === item.id) === -1;
  }
}
