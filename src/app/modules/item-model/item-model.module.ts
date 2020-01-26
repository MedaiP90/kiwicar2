import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ItemModelComponent } from './item-model.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule.forChild(),
    FormsModule,
    RouterModule.forChild([]),
  ],
  declarations: [ItemModelComponent],
  exports: [ItemModelComponent]
})
export class ItemModelModule {}
