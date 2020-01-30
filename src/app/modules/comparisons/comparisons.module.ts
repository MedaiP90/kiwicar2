import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComparisonsPageRoutingModule } from './comparisons-routing.module';

import { ComparisonsPage } from './comparisons.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComparisonsPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [ComparisonsPage]
})
export class ComparisonsPageModule {}
