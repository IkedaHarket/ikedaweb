import { Component } from '@angular/core';
import { ConfigurationService } from 'src/app/modules/configuration/services/configuration/configuration.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent {

  constructor(
    public readonly configuration: ConfigurationService,
  ){}
  
}
