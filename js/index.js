function menuBurger() {
  let menu =
    "Menu de Hamburguesas\n" +
    "---------------------\n" +
    "1) Hamburguesa simple \n" +
    "2) Hamburguesa doble \n" +
    "3) Hamburguesa triple \n" +
    "---------------------\n";
  return menu;
}

function respuestaCorrecta() {
  let continuarUsuario = prompt(
    "Ingrese SI si quiere ver otro producto, NO en caso contrario: "
  ).toUpperCase();
  while (continuarUsuario != "SI" && continuarUsuario != "NO") {
    continuarUsuario = prompt(
      "DATO IVALIDO\n Ingrese solo SI si desea continuar y NO en caso contrario: "
    ).toUpperCase();
  }
  return continuarUsuario;
}

function verMenu() {
  agregarHamburguesas();
  let continuar = true;
  while (continuar) {
    console.log(menuBurger());
    let opcion = parseInt(
      prompt(menuBurger() + "\nIngrese la opción deseada: ")
    );
    if (opcion === 1) {
      verObjeto(hamburguesas[opcion - 1]);
    } else if (opcion === 2) {
      verObjeto(hamburguesas[opcion - 1]);
    } else if (opcion === 3) {
      verObjeto(hamburguesas[opcion - 1]);
    } else {
      console.log("La opción ingresada no es correcta.");
      alert("La opción ingresada no es correcta.");
    }

    let continuarUsuario = respuestaCorrecta();
    if (continuarUsuario === "NO") {
      continuar = false;
    }
  }
}
