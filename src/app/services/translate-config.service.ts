import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateConfigService {

  constructor(
    private translate: TranslateService
  ) { }

  getDefaultLanguage() {
    const language = this.translate.getBrowserLang();
    this.translate.setDefaultLang(language);
    return language;
  }

  setDefaultLanguage(lang) {
    this.translate.setDefaultLang(lang);
  }

  setLanguage(setLang) {
    this.translate.use(setLang);
  }

  setTranslation() {
    let userLang = this.getDefaultLanguage();
    userLang = userLang.match(/it/) ? userLang : 'it';
    this.setDefaultLanguage(userLang);
    this.setLanguage(userLang);
  }
}
