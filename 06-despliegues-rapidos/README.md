# Temas

* Generar build de produccin
* Desplegarlo rapidamente
* Netlify

El proceso de despliegue en otros servidores es virtualmente el mismo, tomar nuestra carpeta DIST (que contiene la aplicacion con archivos HTML, CSS y JS) y desplegarla mediante FTP (preferiblemente sFTP) en el hosting deseado.

# Deploy

1. En nuestro proyecto, ejecutar:

Este genera la carpeta dist.

```
ng build --configuration production
```

* Ref: https://angular.io/cli/build

2. Ir a https://www.netlify.com/:

    * Login 
    * Sites -> Add new site -> Nos da varias opciones.
        * Tambien nos da la opcion para dejar caer la carpeta ``dist`` de nuestro proyecto.
    * Nos da un nombre aleatorio, para cambiar:
        * Domain settings 
        * Options -> Edit site name -> Ingresamos nuevo 
    * Nos da la URL de la App.