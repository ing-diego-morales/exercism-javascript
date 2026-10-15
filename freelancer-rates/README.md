# Tarifas de freelance

Te damos la bienvenida a Tarifas de freelance en la pista JavaScript de Exercism.
Si necesitas ayuda para ejecutar las pruebas o enviar tu código, consulta `HELP.md`.
Si te quedas atascado con el ejercicio, consulta `HINTS.md`, pero intenta resolverlo sin usarlo primero :)

## Introduction

## Números

Muchos lenguajes de programación tienen tipos numéricos específicos para representar distintos tipos de números, pero JavaScript solo tiene dos:

- `number`: un tipo de dato numérico en el formato de coma flotante de 64 bits y doble precisión (IEEE 754).
  Algunos ejemplos son `-6`, `-2.4`, `0`, `0.1`, `1`, `3.14`, `16.984025`, `25`, `976`, `1024.0` y `500000`.
- `bigint`: un tipo de dato numérico que puede representar _números enteros_ en el formato de precisión arbitraria.
  Algunos ejemplos son `-12n`, `0n`, `4n` y `9007199254740991n`.

Si necesitas precisión arbitraria o trabajas con números extremadamente grandes, usa el tipo `bigint`.
De lo contrario, el tipo `number` probablemente sea la mejor opción.

### Redondeo

Existe un objeto global integrado llamado `Math` que proporciona varias [funciones de redondeo][ref-math-object-rounding].
Por ejemplo, puedes redondear hacia abajo (`floor`) o hacia arriba (`ceil`) números decimales al número entero más cercano.

```javascript
Math.floor(234.34); // => 234
Math.ceil(234.34); // => 235
```

## Operadores aritméticos

JavaScript proporciona 6 operadores diferentes para realizar operaciones aritméticas básicas con números.

- `+`: El operador de suma se usa para hallar la suma de números.
- `-`: El operador de resta se usa para hallar la diferencia entre dos números
- `*`: El operador de multiplicación se usa para hallar el producto de dos números.
- `/`: El operador de división se usa para dividir dos números.

```javascript
2 - 1.5; //=> 0.5
19 / 2; //=> 9.5
```

- `%`: El operador de módulo se usa para hallar el residuo de una división realizada.

  ```javascript
  40 % 4; // => 0
  -11 % 4; // => -3
  ```

- `**`: El operador de exponenciación se usa para elevar un número a una potencia.

  ```javascript
  4 ** 3; // => 64
  4 ** 1 / 2; // => 2
  ```

### Orden de las operaciones

Cuando se usan varios operadores en una misma línea, JavaScript sigue un orden de precedencia como el que se muestra en [esta tabla de precedencia][mdn-operator-precedence].
Para simplificarlo a nuestro contexto, JavaScript usa la regla PEDMAS (Paréntesis, Exponentes, División/Multiplicación, Adición/Sustracción) que aprendimos en las clases de matemáticas de primaria.

<!-- prettier-ignore-start -->
```javascript
const result = 3 ** 3 + 9 * 4 / (3 - 1);
// => 3 ** 3 + 9 * 4/2
// => 27 + 9 * 4/2
// => 27 + 18
// => 45
```
<!-- prettier-ignore-end -->

### Operadores de asignación abreviados

Los operadores de asignación abreviados son una forma más corta de escribir código que realiza operaciones aritméticas sobre una variable y asigna el nuevo valor a esa misma variable.
Por ejemplo, considera dos variables `x` e `y`.
Entonces, `x += y` es lo mismo que `x = x + y`.
A menudo, esto se usa con un número en lugar de la variable `y`.
Las otras 5 operaciones también se pueden realizar de forma similar.

```javascript
let x = 5;
x += 25; // x is now 30

let y = 31;
y %= 3; // y is now 1
```

[mdn-operator-precedence]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table
[ref-math-object-rounding]: https://javascript.info/number#rounding

## Instructions

En este ejercicio vas a escribir código para ayudar a un freelance a comunicarse con sus clientes sobre los precios de ciertos proyectos.
Escribirás algunas funciones de utilidad para calcular rápidamente los costes para los clientes.

```exercism/note
La variable `ratePerHour` y la función `dayRate` están relacionadas con el dinero.
Las unidades de medida son dinero por unidad de tiempo: horas y días, respectivamente.
```

## 1. Calcula la tarifa diaria a partir de una tarifa por hora

Un cliente contacta con el freelance para preguntar por sus tarifas.
El freelance explica que **_trabaja 8 horas al día._**
Sin embargo, el freelance solo conoce su tarifa por hora para el proyecto.
Ayúdale a estimar una tarifa diaria a partir de una tarifa por hora.

```javascript
dayRate(89);
// => 712
```

La tarifa diaria no necesita redondearse ni cambiarse a una precisión «fija».

## 2. Calcula el número de días laborables a partir de un presupuesto fijo

Otro día, un jefe de proyecto ofrece al freelance trabajar en un proyecto con un presupuesto fijo.
Dado el presupuesto fijo y la tarifa por hora del freelance, ayúdale a calcular el número de días que trabajaría hasta agotar el presupuesto.
El resultado _debe_ ser **redondeado hacia abajo** al número entero más cercano.

```javascript
daysInBudget(20000, 89);
// => 28
```

## 3. Calcula la tarifa con descuento para proyectos grandes

A menudo, los clientes del freelance lo contratan para proyectos que abarcan varios meses.
En estos casos, el freelance decide ofrecer un descuento por cada mes completo, y los días restantes se facturan a la tarifa diaria.
Tu excelente equilibrio entre la vida laboral y personal hace que solo trabajes 22 días en cada mes natural, así que **_cada mes tiene 22 días facturables._**
Ayúdale a estimar su coste para este tipo de proyectos, a partir de una tarifa por hora, el número de días facturables que contiene el proyecto y una tasa de descuento mensual.
El descuento siempre se pasa como un número, donde `42%` se convierte en `0.42`. El resultado _debe_ ser **redondeado hacia arriba** al número entero más cercano.

```javascript
priceWithMonthlyDiscount(89, 230, 0.42);
// => 97972
```

## Source

### Created by

- @SleeplessByte
- @JaPatGitHub

### Contributed to by

- @junedev