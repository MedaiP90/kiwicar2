import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { ModelsPage } from './models/models.page';
import { AllModelsPage } from './all-models/all-models.page';
import { Routes, RouterModule } from '@angular/router';
import { ItemModelModule } from '../item-model/item-model.module';
import { ModelPage } from './model/model.page';

const routes: Routes = [
  {
    path: '',
    component: AllModelsPage
  },
  {
    path: ':house',
    component: ModelsPage
  },
  {
    path: ':house/:model',
    component: ModelPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemModelModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes)
  ],
  declarations: [ModelsPage, AllModelsPage, ModelPage]
})
export class ModelsPageModule {}
