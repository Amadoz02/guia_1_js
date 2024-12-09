// 10. La pizzería Bella Napoli ofrece pizzas vegetarianas y no vegetarianas a sus clientes. Los
// ingredientes para cada tipo de pizza aparecen a continuación.
// a. Ingredientes vegetarianos: Pimiento y tofu.
// b. Ingredientes no vegetarianos: Pepperoni, Jamón y Salmón.
// Escribir un programa que pregunte al usuario si quiere una pizza vegetariana o no, y en
// función de su respuesta le muestre un menú con los ingredientes disponibles para que
// elija. Solo se puede elegir un ingrediente además de la mozzarella y el tomate que están
// en todas las pizzas. Al final se debe mostrar por pantalla si la pizza elegida es vegetariana
// o no y todos los ingredientes que lleva.

let pizzaVegetariana = prompt("¿Quiere una pizza vegetariana? (s/n)");

if (pizzaVegetariana.toLowerCase() === 's') {
    console.log("Pizza vegetariana:");
    console.log("Ingredientes:");
    console.log("  - mozzarella");
    console.log("  - tomate");
    console.log("  - pimiento");
    console.log("  - tofu");
} else {
    console.log("Pizza no vegetariana:");
    console.log("Ingredientes:");
    console.log("  - Mozzarella");
    console.log("  - tomate");
    console.log("  - pepperoni");
    console.log("  - jamón");
    console.log("  - salmón");
}

let ingredienteAdicional = prompt("¿Qué ingrediente adicional quiere agregar?");

if (ingredienteAdicional.toLowerCase() === "pimiento" || ingredienteAdicional.toLowerCase() === "tofu") {
    console.log(`se agrego ${ingredienteAdicional} a tu pizza`);
} else {
    console.log("El ingrediente elegido no es valido ");
    console.log("Solo se pueden agregar pimientos y tofu");
}

console.log("Pizza elegida:", pizzaVegetariana ==='s'? "Vegetariana" : "No vegetariana");
console.log("Ingredientes en la pizza elegida:", pizzaVegetariana ==='s'? "pimiento, tofu, mozzarella, tomate" : "pepperoni, jamón, salmón, mozzarella, tomate");

