import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-animated-title',
  templateUrl: './animated-title.component.html',
  styleUrls: ['./animated-title.component.scss']
})
export class AnimatedTitleComponent {
  @Input('title') title: string = "Titulo"
}
