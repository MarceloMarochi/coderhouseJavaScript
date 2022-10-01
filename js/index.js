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

function repetir(con) {
  if (con === "SI") {
    verMenu();
  } else if (con !== "NO") {
    console.log(
      "Opción ingresada no valida. Escribir en mayúscula y sin espacios."
    );
  }
}

function verMenu() {
  console.log(menuBurger());
  let opcion = parseInt(prompt(menuBurger() + "\nIngrese la opción deseada: "));
  if (opcion === 1) {
    console.log(
      "Hamburguesa simple con un medallon de carne, doble queso cheddar, lechuga, tomate, cebolla, muzzarela reb y salsa stroke.\n" +
        "Precio $750"
    );
  } else if (opcion === 2) {
    console.log(
      "Hamburguesa doble con dos medallones de carne, doble queso cheddar, lechuga, tomate, panceta y salsa stroke.\n" +
        "Precio $1000"
    );
  } else if (opcion === 3) {
    console.log(
      "Hamburguesa triple con tres medallones de carne, doble queso cheddar, lechuga, tomate, cebolla, panceta y salsa stone.\n" +
        "Precio $1250"
    );
  } else {
    console.log("La opción ingresada no es correcta.");
    alert("La opción ingresada no es correcta.");
  }

  let continuar = prompt(
    "Ingrese SI si quiere ver otro producto, NO en caso contrario."
  );
  repetir(continuar);
}
