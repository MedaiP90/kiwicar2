import { ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

export class AbstractGoToTopPage {
    @ViewChild(IonContent, { static: false }) content: IonContent;

    public goToTop(): void {
        this.content.scrollToTop(1000);
    }
}
