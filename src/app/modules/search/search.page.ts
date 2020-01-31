import { Component, OnInit } from '@angular/core';
import { DataFetcherService } from '../../services/data-fetcher.service';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  public query: string;

  constructor(
    private dataFetch: DataFetcherService,
    private toastController: ToastController,
    private translateService: TranslateService
  ) {
    this.query = '';
  }

  public async ngOnInit() {
    this.query = this.dataFetch.getQuery();
  }

  public async onSaveClick() {
    await this.presentToast(this.getTranslatedString('SEARCH.saved'));
  }

  private async presentToast(text: string) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000
    });
    await toast.present();
  }

  // Internationalization

  private getTranslatedString(key: string): string {
    // tslint:disable-next-line: typedef
    const translation = this.translateService.instant(key);
    if (typeof translation === 'string') {
        return translation;
    }
}

}
