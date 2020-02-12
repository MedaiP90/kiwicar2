import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CurrencyFormatter {
    public jsFormat(price: number, region: string, currency: string): string {
        return new Intl.NumberFormat(region, { style: 'currency', currency }).format(price);
    }
}
