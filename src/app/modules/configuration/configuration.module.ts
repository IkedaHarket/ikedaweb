import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ConfigurationPageComponent } from './pages/configuration-page/configuration-page.component';
import { ConfigurationService } from './services/configuration/configuration.service';


@NgModule({
  declarations: [
    ConfigurationPageComponent
  ],
  imports: [
    CommonModule,
    ConfigurationRoutingModule,
  ]
})
export class ConfigurationModule { 
  constructor(private readonly configuration: ConfigurationService){
    this.loadConfiguration();
  }
  loadConfiguration():void{
    this.configuration.getConfiguration().subscribe()
  }
}
