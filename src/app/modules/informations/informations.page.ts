import { Component, OnInit } from '@angular/core';
import { DeviceInfo, Plugins } from '@capacitor/core';
import { BackNavigationService } from '../../services/back-navigation.service';
import { AbstractBackNavigationPage } from '../../utils/abstract-back-navigation';
import * as moment from 'moment';

const { DeviceInfo, Device } = Plugins;

@Component({
  selector: 'app-informations',
  templateUrl: './informations.page.html',
  styleUrls: ['./informations.page.scss'],
})
export class InformationsPage extends AbstractBackNavigationPage implements OnInit {

  public version: string;
  public copyrightTime: string;

  constructor(
    backNavigationService: BackNavigationService
  ) {
    super(backNavigationService, { toHome: false, inRoot: false });
    this.version = '';
    this.copyrightTime = '';
  }

  public async ngOnInit() {
    // Get app version
    const deviceInfo: DeviceInfo = await this.getCurrentDeviceInformation();
    this.version = `${deviceInfo !== undefined ? deviceInfo.appVersion : ''}`;

    // Copyright year
    const today = moment();
    const start = moment('31/12/2020');
    this.copyrightTime = `2020${today.isAfter(start) ? ` - ${today.format('YYYY')}` : ''}`;
  }

  private async getCurrentDeviceInformation(): Promise<DeviceInfo | undefined> {
    try {
      return await Device.getInfo();
    } catch (error) {
        console.error('error getting device information', error);
    }

    return undefined;
  }

}
