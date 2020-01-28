import { KeyValue } from '@angular/common';
import { IManufacturer } from './manufacturer.interface';

export class IModel {
    name: string;
    images: string[];
    manufacturer: IManufacturer;
    data: string | KeyValue<string, string>;
    price: number;
}
