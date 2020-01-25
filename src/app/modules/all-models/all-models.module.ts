import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllModelsPageRoutingModule } from './all-models-routing.module';

import { AllModelsPage } from './all-models.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    AllModelsPageRoutingModule
  ],
  declarations: [AllModelsPage]
})
export class AllModelsPageModule {}
