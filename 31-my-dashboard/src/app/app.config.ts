import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withViewTransitions({ // se importo para transiciones de rutas
        skipInitialTransition: true, // la priemra no muestra las transiciones hasta las demas empieza a mostrar
        // onViewTransitionCreated( transitionInfo ){
        //   console.log(transitionInfo); // mostrar trancisiones
        // }
      }), 
    ),
    importProvidersFrom(
      HttpClientModule
    )
  ]
};
