import { Component, OnInit } from '@angular/core';
import { ComparisonService } from 'src/app/services/comparison.service';
import { IModel } from 'src/app/interfaces/model.interface';
import { KeyValue } from '@angular/common';
import { AbstractGoToTopPage } from 'src/app/utils/abstract-go-to-top-page';

@Component({
  selector: 'app-comparisons',
  templateUrl: './comparisons.page.html',
  styleUrls: ['./comparisons.page.scss'],
})
export class ComparisonsPage extends AbstractGoToTopPage implements OnInit {

  public comparisons: IModel[];

  constructor(
    private comparisonsService: ComparisonService
  ) {
    super();
    this.comparisons = [];
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

  public isFav(model: IModel): boolean {
    return false;
  }

  public removeFromComparisons(model: IModel): void {
    this.comparisonsService.remove(model);
  }

}
