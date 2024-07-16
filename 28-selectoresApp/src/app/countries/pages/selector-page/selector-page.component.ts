import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Region, SmallCountry } from '../../interfaces/country.interfaces';
import { filter, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: ``
})
export class SelectorPageComponent implements OnInit {

  public countriesByRegion: SmallCountry[] = [];
  public borders: SmallCountry[] = [];

  public myForm: FormGroup = this.fb.group({
    region: ['', Validators.required ],
    country: ['', Validators.required ],
    border: ['', Validators.required ],
  });

  constructor(
    private fb: FormBuilder,
    private countriesService: CountriesService,
  ){}

  ngOnInit(): void {
    this.onRegionChanged();
    this.onCountryChanged();
  }

  get regions(): Region[]{
    return this.countriesService.regions;
  }

  onRegionChanged(): void {
    this.myForm.get('region')!.valueChanges // cuando cambia este valor del control
      .pipe(
        tap( () => this.myForm.get('country')!.setValue('') ), // limpiar el valor de country para que no quede en blanco cuando cambio de region
        tap( () => this.borders = []),
        switchMap(region => this.countriesService.getCountriesByRegion(region)), // toma el valor del observable anteriror y se subscribe al nuevo observable
      )
      .subscribe( countries => {
        this.countriesByRegion = countries;
      });
  }

  onCountryChanged(): void {
    this.myForm.get('country')!.valueChanges
      .pipe(
        tap(() => this.myForm.get('border')!.setValue('') ), // limpiar el valor de country para que no quede en blanco cuando cambio de region
        filter((value:string) => value.length > 0), // si es true, continua la ejecucion, es para no enviar cadenas vacias y no hacer la validcion en el service
        switchMap( (alphaCode) => this.countriesService.getCountryByAlphaCode(alphaCode)),
        switchMap( (country) => this.countriesService.getCountryBordersByCodes( country.borders ))
      )
      .subscribe( countries => {
        this.borders = countries;
      });
  }

}
