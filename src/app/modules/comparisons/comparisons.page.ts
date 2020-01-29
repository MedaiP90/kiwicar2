import { Component, OnInit } from '@angular/core';
import { BackNavigationService } from 'src/app/services/back-navigation.service';
import { AbstractBackNavigationPage } from 'src/app/utils/abstract-back-navigation';
import { ComparisonService } from 'src/app/services/comparison.service';
import { IModel } from 'src/app/interfaces/model.interface';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-comparisons',
  templateUrl: './comparisons.page.html',
  styleUrls: ['./comparisons.page.scss'],
})
export class ComparisonsPage extends AbstractBackNavigationPage implements OnInit {

  public comparisons: IModel[];

  constructor(
    backNavigationService: BackNavigationService,
    private comparisonsService: ComparisonService
  ) {
    super(backNavigationService, { toHome: false, inRoot: false });
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
      items.push(info[key]);
    });

    return items.join(', ');
  }

}
