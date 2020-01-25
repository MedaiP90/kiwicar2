import { KeyValue } from '@angular/common';

export class IModel {
    name: string;
    images: string[];
    manufacturer: string;
    data: string | KeyValue<string, string>;
}
