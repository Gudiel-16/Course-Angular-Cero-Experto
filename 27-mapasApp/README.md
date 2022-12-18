# MapasApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.9.

# Temas

* Uso de Mapbox
* Marcadores
* Polylinles
* Rutas
* Direcciones
* Distancias
* Custom Http Clients ( muy til )

# Links

* https://www.netlify.com/

# Extension Crome

* Angular DevTools

# Mapbox

* Instalar:

```
npm install --save mapbox-gl
npm i --save-dev @types/mapbox-gl
```

* Config CDN del CSS:

```html
<link href='https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css' rel='stylesheet' />
```

* Config tsconfig.json y agregar (dentro de ``compilerOptions``):

```json
"allowSyntheticDefaultImports": true,
```

# Deploy

* Generar carpeta dist:

```
npm run build
```

* Tomar carpeta que nos da dentro de dist y dejarla caer en netlify.
    * Domains settings
    * Options -> Edit site name
    * Ingresamos un nombre -> Save
    * Abrimos link.

# Posibles errores

1.  Algo sobre NodeJS, que es se uso en componente ``search-bar``:

```typescript
private debounceTimer?: NodeJS.Timeout;
```

* Solucion: ir a ``tsconfig.app.json`` y ``tsconfig.json`` y agregar dentro de ``compilerOptions``:
    * 

```json
"types": [
      "node"
    ]
```

2. Algo sobre que excede el tamanio de la app, al hacer el 'build' para el deploy.

* Solucion 1: Usar CDN en vez del paquete de mapbox.
* Solucion 2: Ir a angular.json:
    * Configurations -> Production -> budgets -> maximumError
    * Aumentar de 1mb a 3mb.