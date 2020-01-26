import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-model',
  templateUrl: './item-model.component.html',
  styleUrls: ['./item-model.component.scss'],
})
export class ItemModelComponent {

  @Input() title: string;
  @Input() img: string;
  @Input() manufacturer: string;
  @Input() fuel: string;

  constructor() { }

}
