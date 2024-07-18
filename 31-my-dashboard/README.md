# MyDashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Temas

* Signals
    * Observables a signal
    * Signal para estados en servicios
    * Signal de solo lectura (asReadOnly)
    * Signal computadas
* Defer
    * Funcionalidad
    * Triggers
* Control Flow
    * @if
    * @for
    * @else
    * @empty
    * @switch
    * @case
    * @default
* View Transition API (Aun no compatible con todos los navegadores)
* Nuevo sistema de deteccion de cambios
* Tailwind con Angular
* Configuracin de Path alias en TypeScript

## Tailwindcss

* https://tailwindcss.com/
* https://tailwindcss.com/docs/installation/framework-guides
    * Seguir la guia para instalar en angular.
    * Se pueden hacer todos los alias como se requiera.

## Alias

* Ir a `tsconfig.json`
    * En `compilerOptions`:

```
"paths": {
      "@shared/*": ["./src/app/shared/*"]
    },
```

* Todo queda de la siguiente forma:

```
/* To learn more about this file see: https://angular.io/config/tsconfig. */
{
  "compileOnSave": false,
  "compilerOptions": {
    "paths": {
      "@shared/*": ["./src/app/shared/*"]
    },
    "outDir": "./dist/out-tsc",
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "sourceMap": true,
    "declaration": false,
    "experimentalDecorators": true,
    "moduleResolution": "node",
    "importHelpers": true,
    "target": "ES2022",
    "module": "ES2022",
    "useDefineForClassFields": false,
    "lib": [
      "ES2022",
      "dom"
    ]
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  }
}

```