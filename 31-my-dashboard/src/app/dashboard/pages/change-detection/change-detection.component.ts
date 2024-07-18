import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush, // esta pendiente en menos cambios de nuestra app, mejorando el performance
  template: `
    <app-title [title]="currentFramework()"></app-title>

    <pre>{{ frameworkAsSignal() | json }}</pre>
    <pre>{{ frameworkAsProperty | json }}</pre>

  `
})
export default class ChangeDetectionComponent {

  public currentFramework = computed(
    () => `Change detection - ${ this.frameworkAsSignal().name }`
  )

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2024,
  });
  
  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2024,
  };

  constructor(){
    setTimeout(() => {

      // this.frameworkAsProperty.name = 'React';

      this.frameworkAsSignal.update((value) => ({
        ...value,
        name: 'React'
      }));

      console.log("hecho");
      
    }, 3000);
  }

}
