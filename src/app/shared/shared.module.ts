import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { FooterComponent } from './components/footer/footer.component';
import { AnimatedTitleComponent } from './components/animated-title/animated-title.component';
import { MapleLeafComponent } from './components/maple-leaf/maple-leaf.component';
import { PickColorComponent } from './components/pick-color/pick-color.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CarouselComponent,
    FooterComponent,
    AnimatedTitleComponent,
    MapleLeafComponent,
    PickColorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  exports:[
    HeaderComponent,
    CarouselComponent,
    FooterComponent,
    AnimatedTitleComponent,
    MapleLeafComponent,
    PickColorComponent,
  ]
})
export class SharedModule { }
