
//FOR-IN

var vec = [2, -3, 15, 99, 35];

//Podemos pensar un array como un objeto.
//Los objetos se separan en CLAVE: VALOR;
//En un array la clave es el índice.

//NOTA: Declaro key como let porque no la voy a necesitar fuera del for. Para ahorrar memoria, la variable nace y muere en el for. Por eso no uso var dentro del for. Tampoco tendría sentido declararla como const. 

//Recorre e imprime cada clave/índice/key:
for (let key in vec) {
    console.log(key);
}

//Recorre e imprime cada propiedad/valor:
for (let key in vec) {
    console.log(vec[key]);
}

//Imprime el vector:
console.log(vec);

//Creo un objeto de forma literal:
var obj = {
    nombre: 'Carolina',
    edad: 36
}

//Imprimo las claves:
for (let key in obj) {
    console.log(key);
}

//Imprimo los valores:
for (let key in obj) {
    console.log(obj[key]);
}

//Imprimo el objeto:
console.log(obj);

////////////////////////////////////////////////////////////////////////////////////////////////////////

//FOR-OF

let cad = "¡Hola, Mundo!";

//De cada elemento del array se hace una copia en item. Acá no necesito indicar el índice como en obj[key]
for (let item of cad) {
    console.log(item);
}

let nombres = ['Carolina', 'Leonardo', 'Luisa'];

for (let item of nombres) {
    console.log(item);
}