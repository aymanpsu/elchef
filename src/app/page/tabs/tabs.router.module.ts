import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab-home',
        children: [
          {
            path: '',
            loadChildren: '../tab-home/tab-home.module#TabHomePageModule'
          },
          {
            path: 'respice',
            loadChildren: '../respice/respice.module#RespicePageModule'
          },
        ]
      },
      {
        path: 'tab-setting',
        children: [
          {
            path: '',
            loadChildren: '../tab-setting/tab-setting.module#TabSettingPageModule'
          }
        ]
      },
      {
        path: 'tab-profile',
        children: [
          {
            path: '',
            loadChildren: '../tab-profile/tab-profile.module#TabProfilePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab-home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab-home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
