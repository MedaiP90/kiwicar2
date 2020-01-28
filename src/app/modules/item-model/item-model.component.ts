import { Component, Input } from '@angular/core';
import { IModel } from 'src/app/interfaces/model.interface';

@Component({
  selector: 'app-item-model',
  templateUrl: './item-model.component.html',
  styleUrls: ['./item-model.component.scss'],
})
export class ItemModelComponent {

  @Input() model: IModel;
  @Input() img: string | undefined;

  constructor() { }

}
