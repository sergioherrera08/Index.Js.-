import { agregarProducto, eliminarProducto, vaciarCarrito } from "./carrito.js";

const carrito = [{ nombre: "papa", precio: 123 }];

const programa = () => {
  console.log("1. Agregar producto");
  console.log("2. Eliminar producto");
  console.log("3. Vaciar carrito");
  let opcion = prompt("Elige una opcion:");

  if (opcion === "1") {
    let nombre = prompt("Nombre del producto:");
    let precio = parseInt(prompt("Precio del producto"));

    const producto = { nombre, precio };

    agregarProducto(producto, carrito);
  } else if (opcion === "2") {
    let nombre = prompt("Nombre del producto a eliminar:").toLocaleLowerCase();

    eliminarProducto(nombre, carrito);
  } else if (opcion === "3") {
    vaciarCarrito(carrito);
  }
};

programa();
console.log(carrito);