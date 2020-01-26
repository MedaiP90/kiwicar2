import { Injectable } from '@angular/core';
import { IManufacturer } from '../interfaces/manufacturer.interface';
import { IModel } from '../interfaces/model.interface';
import { ABARTH, AUDI, KIA, OPEL, SEAT, A585, A3, RIO, CORSA, IBIZA, A4 } from '../interfaces/mockup-logos';

@Injectable({
  providedIn: 'root'
})
export class DataFetcherService {

  private manufacturers: IManufacturer[];
  private modelsManuf: IModel[][];
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

  public get AllModels(): IModel[] {
    if (this.manufacturers.length === 0) {
      this.fetchManufacturers();
    }

    let allModels: IModel[] = [];

    this.manufacturers.forEach((m: IManufacturer) => {
      allModels = [...allModels, ...this.getModelsByManufacturer(m.name)];
    });

    return allModels;
  }

  public getModelsByManufacturer(m: string): IModel[] {
    if (this.modelsManuf[m].length === 0) {
      this.fetchModelByManufacturer(m);
    }

    return this.modelsManuf[m];
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

  private fetchModelByManufacturer(m: string): void {
    switch (m) {
      case 'Abarth':
        this.modelsManuf[m].push({ name: '585', images: [A585], manufacturer: m, data: 'benzina' });
        break;
      case 'Audi':
        this.modelsManuf[m].push({ name: 'A3', images: [A3], manufacturer: m, data: 'benzina' });
        this.modelsManuf[m].push({ name: 'A4', images: [A4], manufacturer: m, data: 'benzina' });
        break;
      case 'Kia':
        this.modelsManuf[m].push({ name: 'Rio', images: [RIO], manufacturer: m, data: 'benzina' });
        break;
      case 'Opel':
        this.modelsManuf[m].push({ name: 'Corsa', images: [CORSA], manufacturer: m, data: 'benzina' });
        break;
      case 'Seat':
        this.modelsManuf[m].push({ name: 'Ibiza', images: [IBIZA], manufacturer: m, data: 'benzina' });
        break;
      default: break;
    }
  }
}
