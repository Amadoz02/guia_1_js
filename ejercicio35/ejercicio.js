// 35. Un jefe de obra con el dinero que tiene compra cinco juegos de llaves hexagonales cada
// uno por $11500. Una bomba en $1168000 y tres cajas de pernos cada uno por $87000.
// Después de pagar le sobran $91000. ¿Cuánto dinero tenía?

const productos = [
    { nombre: "Juego de llaves", cantidad: 5, precio: 11500 },
    { nombre: "Bomba", cantidad: 1, precio: 1168000 },
    { nombre: "Cajas de pernos", cantidad: 3, precio: 87000 },
  ];
  
  let dineroRestante = parseFloat(prompt("Ingrese cuánto dinero le sobró al jefe de obra:"));
  let totalGastos = productos.reduce((total, producto) => total + producto.cantidad * producto.precio, 0);
  let dineroInicial = totalGastos + dineroRestante;
  
  alert(`El dinero inicial del jefe de obra era $${dineroInicial}.`);
  