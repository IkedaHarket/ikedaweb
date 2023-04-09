import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { DashboardItemComponent } from './components/dashboard-item/dashboard-item.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    WelcomePageComponent,
    DashboardPageComponent,
    DashboardItemComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    SharedModule,
    RouterModule,
  ]
})
export class WelcomeModule { }
