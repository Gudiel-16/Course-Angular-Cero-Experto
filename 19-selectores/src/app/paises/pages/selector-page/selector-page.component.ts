import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';

import { PaisSmall } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    region    : ['', Validators.required ],
    pais      : ['', Validators.required ],
    frontera  : ['', Validators.required ],
  });

  regiones  : string[] = [];
  paises    : PaisSmall[] = [];
  fronteras : PaisSmall[] = [];

  cargando: boolean = false;

  constructor( private fb: FormBuilder,
               private paisesService: PaisesService ) { }

  ngOnInit(): void {
    this.regiones = this.paisesService.regiones;

    // cuando cambia region
    this.miFormulario.get('region')?.valueChanges
      .pipe(
        tap( ( _ ) => { // _ para decir que no importa lo que tegna
          this.miFormulario.get('pais')?.reset(''); // cuando cambie region, se resetea el campo
          this.cargando = true;
        }),
        switchMap( region => this.paisesService.getPaisesPorRegion(region) )
      )
      .subscribe( paises => {
        this.paises = paises;
        this.cargando = false;
      });

      // cuando cambia el pais
      this.miFormulario.get('pais')?.valueChanges
      .pipe(
        tap( () => {
          this.miFormulario.get('frontera')?.reset('');
          this.cargando = true;
        }),
        switchMap( codigo => this.paisesService.getPaisPorCodigo( codigo ) ),
        switchMap( pais => this.paisesService.getPaisesPorCodigos( pais?.borders! ) )
      )
      .subscribe( paises => {
        // this.fronteras = pais?.borders || [];
        this.fronteras = paises;
        this.cargando = false;
      })

    // Cuando cambie la region (subscribe anidados)
    // this.miFormulario.get('region')?.valueChanges
    //   .subscribe( region => {
    //     console.log(region);
    //     this.paisesService.getPaisesPorRegion(region)

    //       .subscribe( paises => {
    //         console.log(paises);
    //         this.paises = paises;
    //       } );
    //   });

  }
  
  guardar() {
    console.log(this.miFormulario.value)
  }
}
