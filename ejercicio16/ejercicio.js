// 16. Escribir un programa que calcule la velocidad de un proyectil que recorre 2km en 5 minutos, exprese el resultado en metros/segundo.

let distancia = prompt("ingrese la distancia en km ") 
let tiempo = prompt("ingrese tiempo en minutos");

let velocidad = (distancia*1000) / (tiempo*60);
alert(velocidad);
