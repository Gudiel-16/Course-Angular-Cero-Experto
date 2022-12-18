# 10PipesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.9.

# Temas

* Pipes de Angular:
    * Uppercase
    * Lowercase
    * TitleCase
    * Date
    * Decimal
    * Currency
    * Percent
    * i18nSelect
    * i18Plural
    * KeyValue
    * Json
    * Async
* PrimeNG
* Modulo especializado para modulos de PrimeNG

PrimeNG es un paquete de componentes estilizados que contienen funcionalidades basadas en Angular para crear aplicaciones elegantes, hermosas y funcionales rapidamente.

# Links

* https://angular.io/api?query=pipe
* https://www.primefaces.org/primeng/
* https://www.primefaces.org/primeflex/gridsystem
* https://angular.io/api/common/DatePipe
* https://primefaces.org/primeng/fieldset
* https://angular.io/api/common/I18nSelectPipe
* https://angular.io/api/common/I18nPluralPipe
* https://angular.io/api/common/SlicePipe
* https://angular.io/api/common/KeyValuePipe
* https://angular.io/api/common/JsonPipe
* https://angular.io/api/common/AsyncPipe

# Uso de Prime

* Version 14, porque estamos usando angular 14.

```
npm install primeng@14
npm install primeicons
```

* Agregar en ``angular.json``:

```json
"styles": [
    "node_modules/primeicons/primeicons.css",
    "node_modules/primeng/resources/themes/lara-light-blue/theme.css",
    "node_modules/primeng/resources/primeng.min.css",
    ...
]
```

* Seleccionamos tema a utilizar, este caso vela-blue:

  * En la pagina nos dan: ``primeng/resources/themes/vela-blue/theme.css``
  * En el ``angular.json`` cambiamos el tema por este, quedando:

```json
"styles": [
              "src/styles.css",
              "node_modules/primeicons/primeicons.css",
              "node_modules/primeng/resources/themes/vela-blue/theme.css",
              "node_modules/primeng/resources/primeng.min.css"
            ],
```

* Ya podemos usar los modulos en nuestra app.

# Prime flex

```
npm install primeflex
```

* Modificamos el ``angular.json``, ahora quedaria:

```
"styles": [
              "src/styles.css",
              "node_modules/primeicons/primeicons.css",
              "node_modules/primeng/resources/themes/vela-blue/theme.css",
              "node_modules/primeng/resources/primeng.min.css",
              "node_modules/primeflex/primeflex.css"
            ],
```

# Fieldset y Config prime (efectos al dar click en un fieldset o el menu)

* Para usar el fieldset, se importo el ``BrowserAnimationsModule`` en ``app.module.ts``
* Configuracion en ``app.component.ts``