import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ // lo que queremos hacer visible
        ListadoComponent
    ],
    imports: [ // se importan modulos
        CommonModule // para usar directivas como, ngFor y ngIf
    ]
})
export class HeroesModule {}