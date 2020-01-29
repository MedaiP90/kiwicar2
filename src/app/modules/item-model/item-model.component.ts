import { Component, Input, OnInit } from '@angular/core';
import { IModel } from 'src/app/interfaces/model.interface';
import { ComparisonService } from 'src/app/services/comparison.service';

@Component({
  selector: 'app-item-model',
  templateUrl: './item-model.component.html',
  styleUrls: ['./item-model.component.scss'],
})
export class ItemModelComponent implements OnInit {

  @Input() model: IModel;
  @Input() img: string | undefined;

  public keys: string[];
  public isChecked: boolean;

  constructor(private comparisonsService: ComparisonService) {
    this.keys = [];
    this.isChecked = false;
  }

  public ngOnInit(): void {
    this.keys = Object.keys(this.model.data);
    this.isChecked = this.comparisonsService.isPresent(this.model);
  }

  public inComparison(): void {
    if (this.isChecked) {
      this.comparisonsService.add(this.model);
    } else {
      this.comparisonsService.remove(this.model);
    }
  }

}
