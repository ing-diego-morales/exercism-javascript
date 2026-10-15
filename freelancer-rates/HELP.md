# Help

## Ejecutar las pruebas

## Configuración

Sigue las [instrucciones de configuración para JavaScript][docs-exercism-javascript] para instalar las dependencias necesarias.

## Requisitos

Instala las dependencias del ejercicio:

```shell
corepack pnpm install
```

Si `corepack` se queja de que no está habilitado, puedes habilitarlo ejecutando:

```bash
corepack enable pnpm
```

## Hacer que la suite de pruebas pase

Todos los ejercicios incluyen una suite de pruebas que te ayuda a validar tu solución antes de enviarla.
Puedes ejecutar estas pruebas abriendo una terminal en el directorio del ejercicio y, a continuación, ejecutando:

```bash
corepack pnpm test
```

En algunas suites de pruebas, todas las pruebas menos la primera están desactivadas.

Cuando consigas que una prueba pase, puedes activar la siguiente cambiando `xtest` por `test`.

## Escribir pruebas personalizadas

Si quieres escribir pruebas adicionales y personalizadas, crea un archivo nuevo, `custom.spec.js`, y envíalo con tu solución junto con el archivo nuevo:

```shell
exercism submit numbers.js custom.spec.js
```

[docs-exercism-javascript]: https://exercism.org/docs/tracks/javascript/installation

## Enviar tu solución

Puedes enviar tu solución con el comando `exercism submit freelancer-rates.js`.
Este comando subirá tu solución al sitio web de Exercism e imprimirá la URL de la página de la solución.

Es posible enviar una solución incompleta, lo que te permite:

- Ver cómo otras personas han completado el ejercicio
- Pedir ayuda a un mentor

## ¿Necesitas ayuda?

Si quieres ayuda para resolver el ejercicio, consulta las siguientes páginas:

- La [documentación de la pista JavaScript](https://exercism.org/docs/tracks/javascript)
- La [categoría de programación de la pista JavaScript en el foro](https://forum.exercism.org/c/programming/javascript)
- La [categoría de programación de Exercism en el foro](https://forum.exercism.org/c/programming/5)
- Las [preguntas frecuentes](https://exercism.org/docs/using/faqs)

Si esos recursos no te bastan, puedes enviar tu solución (incompleta) para solicitar mentoría.

Si tienes problemas, puedes usar uno de los siguientes recursos:

- [/r/javascript](https://www.reddit.com/r/javascript) es el subreddit de JavaScript.
- [StackOverflow](https://stackoverflow.com/questions/tagged/javascript+exercism) puedes usarlo para buscar tu problema y ver si ya ha sido respondido. También puedes hacer y responder preguntas.
- [Rastreador de problemas de GitHub](https://github.com/exercism/javascript/issues) es donde hacemos seguimiento de nuestro desarrollo y mantenimiento de los ejercicios de JavaScript en Exercism. Pero si ninguno de los enlaces anteriores te ayuda, no dudes en publicar un problema aquí.