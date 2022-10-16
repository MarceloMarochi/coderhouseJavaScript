const hamburguesas = [];

class Hamburguesa {
  contructor(nombre, descripcion, precio) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
  }
}

function agregarHamburguesas() {
  let nombre = "Hamburguesa Simple";
  let descripcion =
    "Hamburguesa simple con un medallon de carne, doble queso cheddar, lechuga, tomate, cebolla, muzzarela reb y salsa stroke.";
  let precio = "Precio $750";
  const burguer1 = new Hamburguesa(nombre, descripcion, precio);
  hamburguesas.push(burguer1);

  let nombre2 = "Hamburguesa Doble";
  let descripcion2 =
    "Hamburguesa doble con dos medallones de carne, doble queso cheddar, lechuga, tomate, panceta y salsa stroke.";
  let precio2 = "Precio $1000";
  const burguer2 = new Hamburguesa(nombre2, descripcion2, precio2);
  hamburguesas.push(burguer2);

  let nombre3 = "Hamburguesa Triple";
  let descripcion3 =
    "Hamburguesa triple con tres medallones de carne, doble queso cheddar, lechuga, tomate, cebolla, panceta y salsa stone.";
  let precio3 = "Precio $1250";
  const burguer3 = new Hamburguesa(nombre3, descripcion3, precio3);
  hamburguesas.push(burguer3);
}

function verObjeto(obj) {
  console.log("nombre: " + obj.nombre);
  console.log("descripcion: " + obj.descripcion);
  console.log("precio: " + obj.precio);
}
