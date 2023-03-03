# HuntTheWumpusAngular15

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

## Install packages
Run `npm i`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Comentarios tras la entrevista técnica

El código entregado corresponde a la versión presentada en la entrevista técnica del 02/03/2023 a las 16:00 horas. La aplicación se desarrolló en poco más de una jornada laboral, por lo que si hubiera contado con más tiempo, habría aplicado las siguientes mejoras y cambios estructurales:

- Crear un módulo que englobe todo el Angular Material.
- Establecer los atributos en private en los servicios, especialmente los del hero y el matrix, y crear funciones de acceso para evitar acceder directamente a ellos.
- Optimizar el servicio de matrix mediante la creación de una función genérica que evite la duplicidad de código en las funciones addWells y addWumpus entre otras.
- Reemplazar varios "if" en el componente Board para pintar los emojis por un enum de los emojis para cada valor, lo que lo hará más elegante.
- Redistribuir las responsabilidades del componente Controls. Las funciones de visitar celda o acabar el juego se pueden ubicar en la misma página de Game o en un servicio que maneje el estado general del juego.

Otras mejoras:
- En el formulario de entrada de la página principal, no se validan combinaciones complejas, como por ejemplo, que haya más pozos que celdas en el juego, lo que puede romper la aplicación.
- Los test unitarios se han implementado en todos los componentes, pero en su mayoría solo comprueban que el componente existe.







