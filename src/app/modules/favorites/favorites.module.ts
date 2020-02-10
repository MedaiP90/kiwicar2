import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FavoritesPage } from './favorites.page';
import { ItemModelModule } from '../item-model/item-model.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemModelModule,
    TranslateModule.forChild(),
    RouterModule.forChild([
      {
        path: '',
        component: FavoritesPage
      }
    ])
  ],
  declarations: [FavoritesPage]
})
export class FavoritesPageModule {}
