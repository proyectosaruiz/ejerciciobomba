"use strict";
// Tenéis que hacer una función que reciba dos parámetros, número de intentos y código para desactivar la bomba.
// Por cada intento, al usuario le saldrá un prompt preguntándole el código. Si el usuario consigue acertarlo
//  antes de que se le acaben los intentos, gana, si no, pierde.

function iniciarBomba(contraseñaCorrecta, intentos) {
  for (let intentoActual = 0; intentoActual < intentos; intentoActual++) {
    let codigoUsuario = prompt(
      `Introduce el codigo para desactivar la Bomba, Te quedan ${
        intentos - intentoActual
      }`
    );

    if (contraseñaCorrecta === codigoUsuario) {
      alert("Contraseña Correcta");
      break;
    } else if (intentoActual === intentos - 1) {
      alert("Buuuuuuum");
    }
  }
}

iniciarBomba("1234", 4);
