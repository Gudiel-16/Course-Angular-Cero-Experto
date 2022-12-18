# Temas

* Generar version de produccion de Angular
* Desplegar nuestra app de Angular en nuestro backend de Node
* Desplegar el backend + frontend en Heroku
* Realizar actualizaciones por cambios en el Frontend o Backend
* Re-desplegar a Heroku
* Revisar logs en produccion

# Links

* https://www.heroku.com/

# Frontend Config Hash

* Ir a la carpeta de nuestro ``front`` y generar la carpeta ``dist``:

```
ng build --prod
```

* Copiar todos los archivos que estan dentro de la carpeta ``dist`` y pegarlo dentro de la carpeta ``public`` de nuestro ``back``.

    * Pero sigue sin mostrar nuestro front, ya que el back trata de buscar la ruta ``dashboard`` que existe en el front pero no en el back.

* Modificar el ``app-routing.module.ts`` agregando el ``useHash``.

    * Con esto le indicamos que  use la forma de trabajar con hash, es algo que va concatenar automaticamente a angular en el url, de tal manera que hace mas compatible con navegadores web viejos, o en los lugares donde no se puede cambiar el url o forma de llegar al index.html, en las url va agregar algo como: ``#``

```typescript
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
```

* Generar nuevamente el build:

```
ng build --prod
```

* Copiar nuevamente todos los archivos que estan dentro de la carpeta ``dist`` y pegarlo dentro de la carpeta ``public`` de nuestro ``back``.

* Con esto nos mostrara el front, tener en cuenta que hay que pasar primero por el ``index.html``, en otras palabras entrar perimero a la ruta raiz de nuestro front.

# Frontend Config Express

* Ir a la carpeta de nuestro ``front`` y generar la carpeta ``dist``:

```
ng build --prod
```

* Ir al bach, en nuestro ``index.js`` **despues de las rutas**, agregar:

```typescript
app.get('*', () => {
    res.sendFile( path.resolve( __dirname, 'public/index.html' ) );
});
```

* No olvidar importar el paquete 'path'.

```typescript
const path = require('path');
```

* Ya podemos ir a (Para probar de forma local):
    * Si ya esta autenticado un usuario y guardado el token, de lo contrario nos va mandar al login.

```
http://localhost:4200/dashboard
```

# Backend

* En el ``package.json`` tener el script ``start``.
* Ir a Heroku.
    * New -> Create New App.
    * Nombre de la App, y region (mas cerca).
* Create App.
* Verificar si tenemos CLI Heroku instalado.
    * heroku --version
* Abrir el CMD:
    * heroku login
    * cd my-project-server/
    * git init
        * Si estamos usando github, y tenemos inicializdo un repositorio ya no es necesario este comando.
    * heroku git:remote -a nombre_app_heroku
    * git add .
    * git commit -m "mensaje" 
    * git push heroku main

* Nos dara la URL y pueda que no funcione por las variables de entorno ya que en la baseUrl es la de localhost aun.
* Ir al front en las variables de entorno de ``produccion`` y modificar la url de baseUrl.
    * se pone ``/api`` llega que en nuestro back asi estan configurados los endpoints.

```
baseUrl: <url_heroku>/api
```

* Hacer el build de nuestro front nuevamente:

```
ng build --prod
```

* Copiar nuevamente todos los archivos que estan dentro de la carpeta ``dist`` y pegarlo dentro de la carpeta ``public`` de nuestro ``back``.

* Abrir el CMD:
    * cd my-project-server/
    * git add .
    * git commit -m "mensaje" 
    * git push heroku main

# Revisar Logs

* Abrir el CMD:
    * cd my-project-server/
    * heroku logs -n 1000 --tail -a=nombre_app_heroku
        * ``-n 1000``: muestro 1000 lineas.
        * ``--tail``: siempre este escuchando los ultimos logs que heroku esta emitiendo.
        * ``-a``: se pone el nombre de la aplicacion, usualmente se pone solo  la primera vez.