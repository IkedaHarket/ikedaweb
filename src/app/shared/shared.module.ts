import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    HeaderComponent,
    CarouselComponent,
  ]
})
export class SharedModule { }
