import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-heavy-loaders-fast',
  standalone: true,
  imports: [CommonModule, HeavyLoadersFastComponent, TitleComponent],
  template: `
    <section [ngClass]="['w-full', cssClass]">
      <ng-content #name></ng-content>
      
    </section>
  `
})
export class HeavyLoadersFastComponent {

  @Input({required: true}) cssClass!: string;

  constructor(){
    console.log('HeavyLoader Fast Creado');
  }

}
