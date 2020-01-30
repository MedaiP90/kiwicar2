import { Component, OnInit } from '@angular/core';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { BackNavigationService } from 'src/app/services/back-navigation.service';
import { AbstractBackNavigationPage } from 'src/app/utils/abstract-back-navigation';
import * as moment from 'moment';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.page.html',
  styleUrls: ['./informations.page.scss'],
})
export class InformationsPage extends AbstractBackNavigationPage implements OnInit {

  public version: string;
  public copyrightTime: string;

  constructor(
    private appVersion: AppVersion,
    backNavigationService: BackNavigationService
  ) {
    super(backNavigationService, { toHome: false, inRoot: false });
    this.version = '';
    this.copyrightTime = '';
  }

  public async ngOnInit() {
    // Get app version
    const versionNumber = await this.appVersion.getVersionNumber();
    this.version = `${versionNumber}`;

    // Copyright year
    const today = moment();
    const start = moment('31/12/2020');
    this.copyrightTime = `2020${today.isAfter(start) ? ` - ${today.format('YYYY')}` : ''}`;
  }

}
