//Definición de function =>
function cabeceraEjercicio(){
  console.log("Código en JavaScript")
  console.log("Nuevo ejercicio")
  console.log("_____________________")
}

//Llamando a la función
cabeceraEjercicio()

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(let indice = 0; indice < numeros.length; indice++){
  console.log(numeros[indice])
}
console.log("")


cabeceraEjercicio()


let index = 0;
while(index < numeros.length){
    console.log("👉🏽", numeros[index]);
    index++     //index = index + 1
}



//Proyecto a Desarrollar
/*
Primer Paso: Generar un número al azar entre uno y cien (numeroSecreto)
Segundo Paso: Como se desconoce el número, el usuario debe de ingresar un número y se compara el número con el valor registrado en el primer paso
Tercer Paso: Si el número ingresado es igual al número secreto, se debe mostrar en pantalla: "Usted encontró el número! 👏🏻"
Cuarto Paso: Si el número secreto NO es igual al número ingresado, se muestra en pantalla: "El número es mayor/menor que el número ingresado" y te resta una oportunidad para volver a intentarlo, recuerda que solo tienes 5 oportunidades (cantIntentos)
Quinto Paso: En caso que al usuario se le terminó las oportunidades, se muestra en pantalla: "Se te acabó las oportunidades, gracias por participar."
*/


const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let cantIntentos = 5;

while (cantIntentos > 0) {
    const numeroIngresado = parseInt(prompt("Adivina el número secreto entre 1 y 100 ingresando un número:"));

    if (numeroIngresado === numeroSecreto) {
        alert("¡Felicidades! ¡Has encontrado el número secreto! 👏🏻");
        break;
    } else if (numeroIngresado < numeroSecreto) {
        alert("El número es mayor que el número ingresado.");
    } else {
        alert("El número es menor que el número ingresado.");
    }

    cantIntentos--;

    if (cantIntentos === 0) {
        alert("Se te acabaron las oportunidades.");
    } else {
        alert(`Te quedan ${cantIntentos} intentos.`);
    }
}


cabeceraEjercicio()

//Calcular la suma de los elementos del arreglo
/*
const numeros = [2, 8, 5, 20, 8];
console.log("numeros: ", numeros)
let indice = 0;
let suma = 0;
while(indice < numeros.length){
    //console.log("numeros["+indice+"]: ", numeros[indice]);
    suma = suma + numeros[indice]
    //console.log("suma: ", suma)
    indice = indice + 1
}
console.log("suma: ", suma)
*/

cabeceraEjercicio()

/*
const frutas = ['manzana', 'pera', 'uva', 'kiwi', 'plátano', 'mango', 'sandia', 'granadilla', 'melocotón'];
const buscar = prompt("Ingrese el nombre de la fruta preferida: ");
let encontrado = false;
let indice = 0;
while(indice < frutas.length){
    console.log(frutas[indice])
    if(frutas[indice]==buscar.toLowerCase()){
        encontrado = true
        break
    }
    indice++
}
console.log(encontrado)
*/

cabeceraEjercicio()

/*
const original = [4, 2, 7, 1];
const copia = [];
const copia02 = [];

console.log("Bucle con 'for'")
for(let index = 0; index < original.length; index++){
  console.log(original[index])
  copia.push(original[index])
}

console.log("copia: ", copia)
copia.push(0)
console.log("copia: ", copia)
console.log("original: ", original)
console.log("")

console.log("Bucle con 'while'")
let indice = 0;
while(indice < original.length){
  console.log(original[indice])
  copia02.push(original[indice])
  indice++
}
console.log("copia02: ", copia02)
copia02.push(100)
console.log("copia02: ", copia02)
console.log("original: ", original)
*/

cabeceraEjercicio()

//Dado el arreglo, mostrar la cantidad de pares que tiene el arreglo
/*
const numeros = [1, 6, 3, 8, 5, 10];
let contadorPares = 0;
let indice = 0;
while(indice < numeros.length){
    console.log(`${indice} - ${numeros[indice]}`)
    if(numeros[indice] % 2 === 0){
        contadorPares++;
    }
    indice++;
}
console.log("contadorPares: " , contadorPares)
*/

cabeceraEjercicio()

//Dado un arreglo, crear un arreglo cuyos elementos están en orden inverso al arreglo original
/*
const arreglo1 = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"]; //Arreglo original, no cambios
console.log("arreglo1: ", arreglo1)
const arreglo2 = [];  //Arreglo de elementos invertidos
console.log("arreglo2: ", arreglo2)
//arreglo1 es el arreglo original
let indice = 0
while(indice < arreglo1.length){
  console.log("arreglo1[indice]")
  console.log(`${arreglo1[indice]}`)
  arreglo2.unshift(arreglo1[indice])
  indice++
}
console.log("Después del bucle while:")
console.log("arreglo1: ", arreglo1)
console.log("arreglo2: ", arreglo2)
*/

cabeceraEjercicio()

//Dado un arreglo, crear un arreglo cuyos elementos están en orden inverso al arreglo original (usando for)
/*
const nameArray01 = ["Ceci", "Carmen", "Charo", "Estela", "Lucrecia"]
const nameArray02 = []
console.log("nameArray01: ", nameArray01)
console.log("nameArray02: ", nameArray02)
let index = 0

for(let index = nameArray01.length - 1; index >= 0; index--){
  //console.log(nameArray01[index])
  nameArray02.push(nameArray01[index])
}

console.log("nameArray01: ", nameArray01)
console.log("nameArray02: ", nameArray02)
*/

cabeceraEjercicio()
/*
const nameArray01 = ["Ceci", "Carmen", "Charo", "Estela", "Lucrecia"]
const nameArray02 = []
let index = nameArray01.length - 1
while(index >= 0){
  nameArray02.push(nameArray01[index])
  index--
}

console.log("nameArray01: ", nameArray01)
console.log("nameArray02: ", nameArray02)
*/

cabeceraEjercicio()

/*
let textoIngresado = ""
let intentos = 3
while(textoIngresado !== "ok" && intentos > 0){
  //Ejecuta algo
  //Ponemos un prompt para pedir el texto
  textoIngresado = prompt("Ingrese un valor (ingresa 'ok' para salir): ")
  intentos--
  alert(`Te quedan ${intentos} intentos`)
  //Evaluamos el texto
}
*/

cabeceraEjercicio()

/*
let userInput = ""
let attempts = 3
while(userInput !== "ok"){
  userInput = prompt("Enter a value (enter 'ok' to quit): ")
  attempts--
  if(attempts > 0){
    alert(`You have ${attempts} attempts left`)
  } else{
    alert("You ran out of attempts")
    break
  }
}
*/

const notas = [7, 8, 9, 6, 5];

let suma = 0;
let i = 0;

while (i < notas.length) {
    suma += notas[i];
    i++;
}

const promedio = suma / notas.length;

console.log(`El promedio de notas es: ${promedio}`);
