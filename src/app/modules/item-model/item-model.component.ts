import { Component, Input, OnInit } from '@angular/core';
import { IModel } from 'src/app/interfaces/model.interface';

@Component({
  selector: 'app-item-model',
  templateUrl: './item-model.component.html',
  styleUrls: ['./item-model.component.scss'],
})
export class ItemModelComponent implements OnInit {

  @Input() model: IModel;
  @Input() img: string | undefined;

  public keys: string[];

  constructor() {
    this.keys = [];
  }

  public ngOnInit(): void {
    this.keys = Object.keys(this.model.data);
  }

}
