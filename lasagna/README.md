# La deliciosa lasaña de Lucian

Te damos la bienvenida a La deliciosa lasaña de Lucian en la pista JavaScript de Exercism.
Si necesitas ayuda para ejecutar las pruebas o enviar tu código, consulta `HELP.md`.
Si te quedas atascado con el ejercicio, consulta `HINTS.md`, pero intenta resolverlo sin usarlo primero :)

## Introduction

JavaScript es un lenguaje dinámico que admite estilos orientados a objetos, imperativos y declarativos (por ejemplo, la programación funcional).

## Variables

Hay varias formas principales de asignar valores a nombres en JavaScript: usar variables o constantes.
En Exercism, las variables siempre se escriben en [camelCase][wiki-camel-case]; las constantes se escriben en [SCREAMING_SNAKE_CASE][wiki-snake-case].
No hay una guía oficial que seguir, y distintas empresas y organizaciones tienen distintas guías de estilo.
_Siéntete libre de escribir las variables como quieras_.
La ventaja de escribirlas tal como están preparadas en los ejercicios es que se resaltarán de forma diferente en la interfaz web y en la mayoría de los IDE.

Las variables en JavaScript pueden definirse con la palabra clave [`const`][mdn-const], [`let`][mdn-let] o [`var`][mdn-var].

Cuando se usa `let` o `var`, una variable puede hacer referencia a distintos valores a lo largo de su vida.
Por ejemplo, `myFirstVariable` se puede definir y redefinir muchas veces con el operador de asignación `=`:

```javascript
let myFirstVariable = 1;
myFirstVariable = 'Some string';
myFirstVariable = new SomeComplexClass();
```

A diferencia de `let` y `var`, las variables definidas con `const` solo se pueden asignar una vez.
Así es como se definen las constantes en JavaScript.

```javascript
const MY_FIRST_CONSTANT = 10;

// Can not be re-assigned.
MY_FIRST_CONSTANT = 20;
// => TypeError: Assignment to constant variable.
```

<!-- prettier-ignore -->
~~~exercism/note
💡 En un ejercicio de concepto posterior se explora y se explica la diferencia entre la asignación de una _constante_, la vinculación de una _constante_ y el valor de una _constante_.
~~~

## Declaraciones de funciones

En JavaScript, las unidades de funcionalidad se encapsulan en _funciones_, que normalmente se agrupan en el mismo archivo cuando pertenecen juntas.
Estas funciones tienen parámetros (para que puedan recibir argumentos) y pueden _devolver_ un valor con la palabra clave `return`.
Las funciones se invocan con la sintaxis `()`.

```javascript
function add(num1, num2) {
  return num1 + num2;
}

add(1, 3);
// => 4
```

En este ejemplo, el nombre de la función es `add`.
Tiene dos parámetros, `num1` y `num2`.
Devuelve un valor: el resultado de la expresión `num1 + num2`.

Después, se _llama_ a la función `add` con dos argumentos: `1` y `3`.
El resultado de la función, el valor devuelto, es `4`.

```exercism/note
💡 En JavaScript hay _muchas_ formas distintas de declarar una función.
Algunas de estas otras formas se ven diferentes de usar la palabra clave `function`.
El track intenta presentarlas gradualmente, pero si ya las conoces, siéntete libre de usar cualquiera de ellas.
En la mayoría de los casos, usar una u otra no es mejor ni peor.
```

## Exponer a otros archivos

Para que una `function`, una constante o una variable estén disponibles en _otros archivos_, hay que [exportarlas][mdn-export] con la palabra clave `export`.
Otro archivo puede entonces [importarlas][mdn-import] con la palabra clave `import`.
Esto también se conoce como el sistema de módulos.

Un buen ejemplo es cómo funcionan todas las pruebas.
Cada ejercicio tiene al menos un archivo, por ejemplo `lasagna.js`, que contiene la _implementación_.
La _implementación_ se `export`a desde el archivo, lo que hace que esté disponible para importarla en otro archivo.
Además, hay al menos otro archivo, por ejemplo `lasagna.spec.js`, que contiene las _pruebas_.
Este archivo `import`a las entidades públicas (es decir, las `export`adas) para probar la implementación:

```javascript
// file.js
export const MY_VALUE = 10;

export function add(num1, num2) {
  return num1 + num2;
}

// file.spec.js
import { MY_VALUE, add } from './file';

add(MY_VALUE, 5);
// => 15
```

[mdn-const]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
[mdn-export]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
[mdn-import]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
[mdn-let]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
[mdn-var]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
[wiki-camel-case]: https://en.wikipedia.org/wiki/Camel_case
[wiki-snake-case]: https://en.wikipedia.org/wiki/Snake_case

## Instructions

¡La novia de Lucian está de camino a casa y todavía no ha preparado la cena de su aniversario!

En este ejercicio, vas a escribir código para ayudar a Lucian a cocinar una lasaña exquisita con su libro de cocina favorito.

Tienes cuatro tareas relacionadas con el tiempo que se tarda en cocinar la lasaña.

## 1. Define el tiempo esperado en el horno en minutos

Define la constante `EXPECTED_MINUTES_IN_OVEN`, que representa cuántos minutos debe estar la lasaña en el horno. Debe exportarse. Según el libro de cocina, el tiempo esperado en el horno en minutos es `40`.

## 2. Calcula el tiempo restante en el horno en minutos

Implementa la función `remainingMinutesInOven`, que toma como _parámetro_ los minutos reales que la lasaña lleva en el horno y _devuelve_ cuántos minutos tiene que seguir aún la lasaña en el horno, según el **tiempo esperado en el horno en minutos** de la tarea anterior.

```javascript
remainingMinutesInOven(30);
// => 10
```

## 3. Calcula el tiempo de preparación en minutos

Implementa la función `preparationTimeInMinutes`, que toma como _parámetro_ el número de capas que has añadido a la lasaña y _devuelve_ cuántos minutos has dedicado a prepararla, suponiendo que cada capa te lleva 2 minutos de preparación.

```javascript
preparationTimeInMinutes(2);
// => 4
```

## 4. Calcula el tiempo total de trabajo en minutos

Implementa la función `totalTimeInMinutes`, que toma _dos parámetros_: el parámetro `numberOfLayers` es el número de capas que has añadido a la lasaña, y el parámetro `actualMinutesInOven` es el número de minutos que la lasaña lleva en el horno. La función debe _devolver_ cuántos minutos en total has dedicado a cocinar la lasaña, que es la suma del tiempo de preparación en minutos y el tiempo en minutos que la lasaña ha estado en el horno en ese momento.

```javascript
totalTimeInMinutes(3, 20);
// => 26
```

## Source

### Created by

- @SleeplessByte

### Contributed to by

- @junedev