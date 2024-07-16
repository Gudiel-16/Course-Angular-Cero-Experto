# Instalaciones recomendadas - Curso de Angular

## Instalaciones Necesarias

* [Google Chrome](https://www.google.com/chrome/)

* [Visual Studio Code](https://code.visualstudio.com/)

* [Postman](https://www.postman.com/downloads/)

* [Mongo Compass](https://www.mongodb.com/try/download/compass)

* [Git](https://git-scm.com/)

* [Crear cuenta en GitHub](https://github.com/)

```
git config --global user.name "Tu nombre"
git config --global user.email "Tu correo"
```

* [Node](https://nodejs.org/es/)

## Extensiones de VSCode

[Activitus Bar](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.activitusbar)

### Configuración del Bracket Pair Colorizer 2

[Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)
```
"bracket-pair-colorizer-2.colors": [
    "#fafafa",
    "#9F51B6",
    "#F7C244",
    "#F07850",
    "#9CDD29",
    "#C497D4"
],
```
### Tema de interes en VSCode:

* [Monokai Night](https://marketplace.visualstudio.com/items?itemName=fabiospampinato.vscode-monokai-night)

* [Iconos](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

### Instalaciones recomendadas sobre Angular

* [Angular Snippets](https://marketplace.visualstudio.com/items?itemName=Mikael.Angular-BeastCode)

* [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)

* [Angular Inline](https://marketplace.visualstudio.com/items?itemName=natewallace.angular2-inline)

* [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)

* [TypeScript importer](https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter)

### Angular - CLI

* [Angular CLI](https://angular.io/cli)

# Conceptos

* Microsoft le da soporte a TypeScript.

* TypeScript:
    * Es un super set de JavaScript.
    * Ofrece tipado estricto y flexible.
    * Mejora enormemente la legibilidad del codigo.
    * Nos permite usar caracteristicas modernas.

* Caracteristicas de TypeScript:
    * El tipado estricto nos ayuda a sabar como funcionan las cosas.
    * Ayuda instantanea de funciones y metodos.
    * Mejora enormemente el intellisense.

* Por que Angular usa TypeScript?
    * Tener todos los beneficios de TypeScript.
    * Tenemos la ayuda y un intellisense fuerte.
    * Tnemos tipado estricto y errores en momento de escritura.
    * Nos permite la inyeccion de dependencias.

* Mitos:
    * Angular es mejor que React, Vue y Svelte
    * Angular es mas ordenado que React, Vue y Svelte.
    * Angular es complicado de aprender.
    * Las aplicaciones de Angular son muy pesadas.
    * Angular no es SEO Friendly.
    * Angular no soporta diferentes patrones como Redux.
    * Solo puedo correr codigo de TypeScript en mis aplicaciones de Angular.

* Realidades:
    * Angular libera nuesvas versiones a cada rato (cada 6 meses).
    * Angular 2,4,5,6,...,14... es el mismo Angular

* Que es Angular?
    * Es un Framework.
    * Marco de trabajo estandarizado.
    * Viene con todo lo que necesitas para trabajar.
    * Es modular.
    * Google es quiente le da mantenimiento.

* Bloques fundamentales en Angular:
    * Componentes: Bloques de codigo, con html y typescript.
    * Servicios: Lugares centralizdos con informacion.
    * Directivas:
        * Directivas de componentes: es parecido al componente, viene con un pedazo de html reutilizable.
        * Directivas estructurales: modifican en DOM o el HTML, anadiendo elementos o eliminando elementos.
        * Directivas de atributos: cambian la aparencia o el comportamiento de un elemento, componente o directiva.
    * Rutas: Mostrar diferentes componentes basados en el URL del navegador web.
    * Modulos: Permiten agrupar todo lo anterior. (componentes, rutas, directivas, servicios)


# Algunos comandos

* ng new name_app (Proyecto como standalone a partir de 17+)
* ng new name_app --no-standalone (Proyecto con modulos)
* ng g m name_module
* ng g c name_component
* ng g c name_component --skip-tests --inline-style (sin archivos test, ni * estilos)
* ng g c name_component --standalone (como standalone)
* ng g s name_service --skip-tests
* ng g m appRouter --flat (--flat Para que no cree la carpeta app-router)
* ng g pipe name_pipe --skip-tests
* ng g guard name_guard --skip-tests (con barra espaciadora seleccionar * CanActivate y CanLoad)
* ng g m name_module --routing (Crea el modulo de routing automaticamente)
* ng g d name_directive --skip-tests

# Herramientas

* Quicktype (Para crear interfaces)

Otros:

* git tag -a v0.1.0 -m "fin seccion..."
* git tag
* git push --tags
* Convertir en un release tag.
    * Ir al tags en github, editar tag, damos nombre, y descripcion, publicar release.