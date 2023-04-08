import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivatePageRoutingModule } from './private-page-routing.module';
import { ConfigurationPageComponent } from './configuration-page/configuration-page.component';


@NgModule({
  declarations: [
    ConfigurationPageComponent,
  ],
  imports: [
    CommonModule,
    PrivatePageRoutingModule
  ]
})
export class PrivatePageModule { }
