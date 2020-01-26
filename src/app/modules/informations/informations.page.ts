import { Component, OnInit } from '@angular/core';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { BackNavigationService } from 'src/app/services/back-navigation.service';
import { AbstractBackNavigationPage } from 'src/app/utils/abstract-back-navigation';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.page.html',
  styleUrls: ['./informations.page.scss'],
})
export class InformationsPage extends AbstractBackNavigationPage implements OnInit {

  public version: string;

  constructor(
    private appVersion: AppVersion,
    backNavigationService: BackNavigationService
  ) {
    super(backNavigationService, { toHome: false, inRoot: false });
    this.version = '';
  }

  public async ngOnInit() {
    // Get app version
    const versionCode = await this.appVersion.getVersionCode();
    const versionNumber = await this.appVersion.getVersionNumber();
    this.version = `${versionNumber} - build ${versionCode}`;
  }

}
