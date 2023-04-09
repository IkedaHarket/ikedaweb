import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { ConfigurationModule } from './configuration/configuration.module';
import { AuthService } from './auth/services/auth/auth.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    ConfigurationModule
  ]
})
export class ModulesModule { 

  constructor(
    private readonly auth: AuthService,
  ){
    if(localStorage.getItem('token')){
      this.auth.renewToken().subscribe();
    }
  }
}
