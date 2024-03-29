import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabProfilePage } from './tab-profile.page';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: TabProfilePage }])
  ],
  declarations: [TabProfilePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: []
})
export class TabProfilePageModule {}
