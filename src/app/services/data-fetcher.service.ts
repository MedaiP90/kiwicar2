import { Injectable } from '@angular/core';
import { IManufacturer } from '../interfaces/manufacturer.interface';
import { IModel } from '../interfaces/model.interface';
import { ABARTH, AUDI, KIA, OPEL, SEAT, A595, A3, RIO, CORSA, IBIZA, A4 } from '../interfaces/mockup-logos';

@Injectable({
  providedIn: 'root'
})
export class DataFetcherService {

  private manufacturers: IManufacturer[];
  private modelsManuf: IModel[][];
  private query: string;
  private selectedManufacturer: IManufacturer;

  constructor() {
    this.manufacturers = [];
    this.modelsManuf = [];
    this.query = '';
    this.selectedManufacturer = undefined;
  }

  public getQuery(): string { return this.query; }
  public setQuery(q: string) { this.query = q; }

  public getSelectedManufacturer(): IManufacturer { return this.selectedManufacturer; }
  public setSelectedManufacturer(m: IManufacturer) { this.selectedManufacturer = m; }

  public get AllModels(): IModel[] {
    if (this.manufacturers.length === 0) {
      this.fetchManufacturers();
    }

    let allModels: IModel[] = [];

    this.manufacturers.forEach((m: IManufacturer) => {
      allModels = [...allModels, ...this.getModelsByManufacturer(m)];
    });

    return allModels;
  }

  public getModelsByManufacturer(m: IManufacturer): IModel[] {
    if (this.modelsManuf[m.name].length === 0) {
      this.fetchModelByManufacturer(m);
    }

    return this.modelsManuf[m.name];
  }

  public get AllManufacturers(): IManufacturer[] {
    if (this.manufacturers.length === 0) {
      this.fetchManufacturers();
    }

    return this.manufacturers;
  }

  private fetchManufacturers(): void {
    this.manufacturers = [
      { name: 'Abarth', logo: ABARTH, modelsAmount: 1 },
      { name: 'Audi', logo: AUDI, modelsAmount: 2 },
      { name: 'Kia', logo: KIA, modelsAmount: 1 },
      { name: 'Opel', logo: OPEL, modelsAmount: 1 },
      { name: 'Seat', logo: SEAT, modelsAmount: 1 }
    ];

    this.manufacturers.forEach((m: IManufacturer) => {
      this.modelsManuf[m.name] = [];
    });
  }

  private fetchModelByManufacturer(m: IManufacturer): void {
    switch (m.name) {
      case 'Abarth':
        this.modelsManuf[m.name].push({
          name: '595',
          price: 20250,
          images: [A595],
          manufacturer: m,
          data: 'benzina'
        });
        break;
      case 'Audi':
        this.modelsManuf[m.name].push({
          name: 'A3',
          price: 21216.7,
          images: [A3],
          manufacturer: m,
          data: 'benzina'
        });
        this.modelsManuf[m.name].push({
          name: 'A4',
          price: 35066.7,
          images: [A4],
          manufacturer: m,
          data: 'benzina'
        });
        break;
      case 'Kia':
        this.modelsManuf[m.name].push({
          name: 'Rio',
          price: 16925,
          images: [RIO],
          manufacturer: m,
          data: 'benzina'
        });
        break;
      case 'Opel':
        this.modelsManuf[m.name].push({
          name: 'Corsa',
          price: 14580,
          images: [CORSA],
          manufacturer: m,
          data: 'benzina'
        });
        break;
      case 'Seat':
        this.modelsManuf[m.name].push({
          name: 'Ibiza',
          price: 14900,
          images: [],
          manufacturer: m,
          data: 'benzina'
        });
        break;
      default: break;
    }
  }
}
