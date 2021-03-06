import { Component, OnInit } from '@angular/core';
import { ComparisonService } from 'src/app/services/comparison.service';
import { IModel } from 'src/app/interfaces/model.interface';
import { KeyValue } from '@angular/common';
import { AbstractGoToTopPage } from 'src/app/utils/abstract-go-to-top-page';
import { FavoritesService } from 'src/app/services/favorites.service';
import { CurrencyFormatter } from 'src/app/utils/currency-formatter';

@Component({
  selector: 'app-comparisons',
  templateUrl: './comparisons.page.html',
  styleUrls: ['./comparisons.page.scss'],
})
export class ComparisonsPage extends AbstractGoToTopPage implements OnInit {

  public comparisons: IModel[];
  public currencyFormatter: CurrencyFormatter;

  constructor(
    currencyFormatter: CurrencyFormatter,
    private comparisonsService: ComparisonService,
    private favouritesService: FavoritesService
  ) {
    super();
    this.comparisons = [];
    this.currencyFormatter = currencyFormatter;
  }

  public ngOnInit(): void {
    this.comparisons = this.comparisonsService.comparison;
  }

  public modelInfoStringify(info: string | KeyValue<string, string>) {
    if (typeof info === 'string') { return info; }

    const keys: string[] = Object.keys(info);
    const items: string[] = [];

    keys.forEach((key: string) => {
      items.push(`${key}: <b>${info[key]}</b>`);
    });

    return items.join(', ');
  }

  public removeFromComparisons(model: IModel): void {
    this.comparisonsService.remove(model);
  }

  public isFav(model: IModel): boolean {
    return this.favouritesService.isFav(model);
  }

  public async addToFavs(model: IModel): Promise<void> {
    if (this.isFav(model)) {
      await this.favouritesService.removeCarFromFavourites(model);
    } else {
      await this.favouritesService.saveCarToFavourites(model);
    }
  }

}
