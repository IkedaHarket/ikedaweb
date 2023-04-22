import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { FileService } from 'src/app/core/services';
import { Configuration } from 'src/app/modules/configuration/interfaces';
import { ConfigurationService } from 'src/app/modules/configuration/services/configuration/configuration.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit, AfterViewInit {

  @ViewChild('presentationText') presentationText!: ElementRef<HTMLDivElement>

  configurationSub!: Subscription;
  configuration!: Configuration;


  constructor(
    public readonly configurationService: ConfigurationService,
    public readonly file: FileService,
  ){}

  ngOnInit(): void {

    this.configurationSub = this.configurationService.configuration$.subscribe(( c )=> {
      if(!c) return
      this.configuration = c;
    })
  }

  ngAfterViewInit(): void {
    this.presentationText.nativeElement.innerHTML =  this.configuration.webPage.presentationDescription;
  }

}
