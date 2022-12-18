import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]' // nombre a utilizar
})
export class CustomIfDirective {

  // Por el 'TemplateRef' se usa el *, ej: *customIf para que haga referencia al html donde se usa
  // Comunmente se usa el hidden, como se realizo en la otra directiva
  @Input() set customIf( condicion: boolean ) {
    if ( condicion ) {
      this.viewContainer.createEmbeddedView( this.templateRef );
    } else {
      this.viewContainer.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<HTMLElement>,
    private viewContainer: ViewContainerRef
  ) { }

}
