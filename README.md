## 🛠️ Guía de Calidad de Código (ESLint)

Para este curso, no solo evaluamos que tu aplicación "funcione", sino que el código esté escrito siguiendo los estándares profesionales de la industria. Para esto, utilizamos **ESLint**.

### ¿Cómo saber si mi código está bien?

Antes de realizar tu entrega, debes asegurarte de que tu código pase la validación de calidad. Sigue estos pasos:

1. **En tu editor:** Te recomendamos instalar la extensión **ESLint** en VS Code. Verás subrayados en rojo o amarillo los errores directamente mientras escribes.
2. **En la terminal:** Ejecuta el siguiente comando:

```bash
npm run lint

```

- Si no aparece ningún mensaje: **¡Felicidades!** Tu código cumple con los estándares.
- Si aparecen errores: La terminal te dirá exactamente en qué archivo y línea está el problema, junto con una breve descripción.

### ¿Qué errores comunes podrías encontrar?

| Error/Advertencia             | ¿Qué significa?                                                                              | ¿Cómo solucionarlo?                                                  |
| ----------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `no-unused-vars`              | Has declarado una variable que no estás usando.                                              | Borra la variable o úsala en tu lógica.                              |
| `react-hooks/rules-of-hooks`  | Estás usando un Hook (useState, useEffect) dentro de un `if` o un bucle.                     | Los Hooks siempre deben estar en el nivel superior de tu componente. |
| `react-hooks/exhaustive-deps` | Tu `useEffect` depende de una variable que no has incluido en el array de dependencias `[]`. | Añade la variable solicitada al array al final del efecto.           |
| `no-console`                  | Has dejado un `console.log` en el código.                                                    | Límpialos antes de entregar; en producción no deben existir.         |

### Evaluación automática en GitHub

Cada vez que subas tu código a GitHub (`git push`), verás un icono al lado de tu commit:

- ✅ **Verde:** Tu código cumple las reglas y está listo para revisión.
- ❌ **Rojo:** Hay errores que debes corregir. Haz clic en "Details" para ver qué falló, corrígelo en tu computadora y vuelve a subirlo.

> **Nota:** Las entregas que presenten el indicador en rojo **no serán calificadas** hasta que los errores de formato y reglas básicas sean resueltos. ¡Escribir código limpio es parte de ser un gran desarrollador!
