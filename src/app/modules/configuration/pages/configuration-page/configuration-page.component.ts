import { Component } from '@angular/core';
import { ConfigurationService } from '../../services/configuration/configuration.service';

@Component({
  selector: 'app-configuration-page',
  templateUrl: './configuration-page.component.html',
  styleUrls: ['./configuration-page.component.scss']
})
export class ConfigurationPageComponent {

  constructor(
    public readonly configuration : ConfigurationService,
  ){}
}
