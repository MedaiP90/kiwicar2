import { Component, Input, OnInit } from '@angular/core';
import { IModel } from 'src/app/interfaces/model.interface';
import { ComparisonService } from 'src/app/services/comparison.service';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-item-model',
  templateUrl: './item-model.component.html',
  styleUrls: ['./item-model.component.scss'],
})
export class ItemModelComponent implements OnInit {

  @Input() model: IModel;
  @Input() img: string | undefined;

  public keys: string[];

  constructor(
    private favouritesService: FavoritesService,
    private comparisonsService: ComparisonService
  ) {
    this.keys = [];
  }

  public async ngOnInit(): Promise<void> {
    this.keys = Object.keys(this.model.data);
  }

  public get isChecked(): boolean { return this.comparisonsService.isPresent(this.model); }

  public set isChecked(value: boolean) { this.inComparison(value); }

  private inComparison(value: boolean): void {
    if (value) {
      this.comparisonsService.add(this.model);
    } else {
      this.comparisonsService.remove(this.model);
    }
  }

  public get isFav(): boolean {
    return this.favouritesService.isFav(this.model);
  }

  public async addToFavs(): Promise<void> {
    if (this.isFav) {
      await this.favouritesService.removeCarFromFavourites(this.model);
    } else {
      await this.favouritesService.saveCarToFavourites(this.model);
    }
  }

}
