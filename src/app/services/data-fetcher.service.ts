import { Injectable } from '@angular/core';
import { IManufacturer } from '../interfaces/manufacturer.interface';
import { IModel } from '../interfaces/model.interface';
import { ABARTH, AUDI, KIA, OPEL, SEAT } from '../interfaces/mockup-logos';

@Injectable({
  providedIn: 'root'
})
export class DataFetcherService {

  private manufacturers: IManufacturer[];
  private modelsManuf: IModel[];
  private query: string;
  private selectedManufacturer: string;

  constructor() {
    this.manufacturers = [];
    this.modelsManuf = [];
    this.query = '';
    this.selectedManufacturer = '';
  }

  public getQuery(): string { return this.query; }
  public setQuery(q: string) { this.query = q; }

  public getSelectedManufacturer(): string { return this.selectedManufacturer; }
  public setSelectedManufacturer(m: string) { this.selectedManufacturer = m; }

  public get AllManufacturers(): IManufacturer[] {
    if (this.manufacturers.length === 0) {
      this.manufacturers = [
        { name: 'Abarth', logo: ABARTH, modelsAmount: 1 },
        { name: 'Audi', logo: AUDI, modelsAmount: 1 },
        { name: 'Kia', logo: KIA, modelsAmount: 1 },
        { name: 'Opel', logo: OPEL, modelsAmount: 1 },
        { name: 'Seat', logo: SEAT, modelsAmount: 1 }
      ];
    }

    return this.manufacturers;
  }
}
