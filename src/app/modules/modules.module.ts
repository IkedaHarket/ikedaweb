import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { ConfigurationModule } from './configuration/configuration.module';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    ConfigurationModule
  ]
})
export class ModulesModule { }
