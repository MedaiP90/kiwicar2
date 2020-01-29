import { Injectable } from '@angular/core';
import { IModel } from '../interfaces/model.interface';

@Injectable({
  providedIn: 'root'
})
export class ComparisonService {

  private comparisonModels: IModel[];

  constructor() {
    this.comparisonModels = [];
  }

  public get comparison(): IModel[] { return this.comparisonModels; }

  public add(m: IModel): void {
    if (this.isPresent(m)) { return; }
    this.comparisonModels.push(m);
  }
  public remove(m: IModel): void {
    const index = this.comparisonModels.findIndex((model: IModel) => model.id === m.id);
    if (index > -1) { this.comparisonModels.splice(index, 1); }
  }

  public isPresent(model: IModel): boolean {
    return this.comparisonModels.findIndex((m: IModel) => m.id === model.id) !== -1;
  }
}
