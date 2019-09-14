
import { UnsplashModalPhotoPage } from './unsplash-modal-photo';

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParallaxCommonModule } from '../../../../common/parallax/parallax.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ParallaxCommonModule,
    RouterModule.forChild([{ path: '', component: UnsplashModalPhotoPage }])
  ],
  declarations: [
    UnsplashModalPhotoPage
  ],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UnsplashModalPhotoPageModule {}
