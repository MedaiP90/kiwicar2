import { Injectable } from '@angular/core';
import { IManufacturer } from '../interfaces/manufacturer.interface';
import { IModel } from '../interfaces/model.interface';
import { ABARTH, AUDI, KIA, OPEL, SEAT, A595, A3, RIO, CORSA, IBIZA, A4 } from '../interfaces/mockup-logos';

@Injectable({
  providedIn: 'root'
})
export class DataFetcherService {

  public allModelsFilter: string;

  private manufacturers: IManufacturer[];
  private modelsManuf: IModel[][];
  private query: string;

  constructor() {
    this.manufacturers = [];
    this.modelsManuf = [];
    this.query = '';
    this.allModelsFilter = '';
  }

  public getQuery(): string { return this.query; }
  public setQuery(q: string) { this.query = q; }

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

  public getModelFromManufacturerAndId(m: string, id: string): IModel {
    if (this.modelsManuf[m].length === 0) {
      this.fetchModelByManufacturer(
        this.manufacturers.find((man: IManufacturer) => man.name === m)
      );
    }

    return this.modelsManuf[m].find((model: IModel) => model.id === Number(id));
  }

  public get AllManufacturers(): IManufacturer[] {
    if (this.manufacturers.length === 0) {
      this.fetchManufacturers();
    }

    return this.manufacturers;
  }

  public getManufacturerByName(m: string): IManufacturer {
    return this.manufacturers.find((manu: IManufacturer) => manu.name === m);
  }

  private fetchManufacturers(): void {
    this.manufacturers = [
      { name: 'Kia', logo: KIA, modelsAmount: 1 },
      { name: 'Abarth', logo: ABARTH, modelsAmount: 1 },
      { name: 'Seat', logo: SEAT, modelsAmount: 1 },
      { name: 'Audi', logo: AUDI, modelsAmount: 2 },
      { name: 'Opel', logo: OPEL, modelsAmount: 1 }
    ];

    this.manufacturers.forEach((m: IManufacturer) => {
      this.modelsManuf[m.name] = [];
    });
  }

  private fetchModelByManufacturer(m: IManufacturer): void {
    if (m === undefined) { return; }

    const testData = {
      alimentazione: 'benzina',
      potenza: '95cv',
      cambio: 'manuale',
      trazione: 'anteriore'
    };
    const testDescription = `Dummy description for this car from ${m.name}`;

    switch (m.name) {
      case 'Abarth':
        this.modelsManuf[m.name].push({
          id: 0,
          name: '595',
          price: 20250,
          images: [A595],
          manufacturer: m,
          data: testData,
          description: testDescription
        });
        break;
      case 'Audi':
        this.modelsManuf[m.name].push({
          id: 2,
          name: 'A4',
          price: 35066.7,
          images: [A4],
          manufacturer: m,
          data: testData,
          description: testDescription
        });
        this.modelsManuf[m.name].push({
          id: 1,
          name: 'A3',
          price: 21216.7,
          images: [A3],
          manufacturer: m,
          data: testData,
          description: testDescription
        });
        break;
      case 'Kia':
        this.modelsManuf[m.name].push({
          id: 3,
          name: 'Rio',
          price: 16925,
          images: [RIO],
          manufacturer: m,
          data: testData,
          description: testDescription
        });
        break;
      case 'Opel':
        this.modelsManuf[m.name].push({
          id: 4,
          name: 'Corsa',
          price: 14580,
          images: [CORSA],
          manufacturer: m,
          data: testData,
          description: testDescription
        });
        break;
      case 'Seat':
        this.modelsManuf[m.name].push({
          id: 5,
          name: 'Ibiza',
          price: 14900,
          images: [IBIZA],
          manufacturer: m,
          data: testData,
          description: testDescription
        });
        break;
      default: break;
    }
  }
}
