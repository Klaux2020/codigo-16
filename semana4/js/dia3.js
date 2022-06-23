document.write("<h3>Ángulos</h3>");
let angulo = 361;
document.write("<p>" + angulo + "</p>");

let mensaje ="<p>INEXISTENTE.</p>"

if (angulo == 0) {
    mensaje="<p>Nulo.</p>";
} else if (angulo < 90) {
    mensaje="<p>Águdo.</p>";
} else if (angulo == 90) {
    mensaje="<p>Recto.</p>";
} else if (angulo < 180) {
    mensaje="<p>Obtuso.</p>";
} else if (angulo == 180) {
    mensaje="<p>Llano.</p>";
} else if (angulo < 360) {
    mensaje="<p>Concavo.</p>";
} else if (angulo == 360) {
    mensaje="<p>Completo.</p>";
} 

document.write(mensaje)

//SWITCH

//! Una recomendacion es usar break despues de cada case
//! break : Sirve para deterner switch

//Queremos analizar un rango 0...10
switch (angulo) {
case  0:
case  10:
    document.write("<p>Nulo.</p>");
    //despues de ejecutar lo que queremos
    break;
case 90:
    document.write("<p>Recto.</p>");
    break;
case 180:
    document.write("<p>Llano.</p>");
    break;
case 360:
    document.write("<p>Completo.</p>");
    break;
}

//js switch with range

let edad=22;

switch(edad) { 
 case 0:
    console.log("Recien nacido");
    break;
 case 18:
    console.log("Mayor de edad");
    break;
 case 20:
    console.log("Entro a base 2");
    break;
 case 65:
    console.log("Entro a 3era edad");
    break;
 default:
    console.log("Este caso no esta contemplado")
// !Nota en el default no hace falta poner un break porque
// !ahi cuando ni una otra opcion funciona
}

const nombres=["Pepe","Juan","Maria","Luisa","Carlos","Lucas"];
console.log(nombres);
console.log(nombres[3]);
console.log(nombres[6]);

// !Nota si queremos mostrar un dato  en una posicion q no existe
// js retorna un undefined
// length --> Esta funcion retorna la cantidad de elemento
console.log("Nombres",nombres.length);//6 o 7;


const data = [1,true,false,-2-"Hola mundo"]

console.log("datos", datos.length);

//Pregunta si quieres accesde al ultimo elemento usando length

consoles.log("datos",datos[datos.length - 1 ]);

//Push: Sirve para poder agregar un elemento al array
// lo agrega en la ultima posicion
datos.push("Agregando un dato");
console.log("datos con push",datos)
console.log("Agregando un array dentro de un array");
datos.push("Pepe","Juan","Maria");
console.log(datos)

const datosPrueba = [
1,
true,
false,
-2,
"Hola mundo",
"Agregando un dato" ,
["Pepe","Juan",[1,2,4,5,[1-,-2,-4]],"Maria"] 
];

console.log(datosPrueba[3]);
console.log(datosPrueba[6][0]);
console.log(datosPrueba[6][2][3]);
console.log(datosPrueba[6][2][4][2]);

console.log(datosPrueba[6][0].length);//5

console.log(datosPrueba[6][datosPrueba[6].length-3]);

console.log(
    datosPrueba[6][datosPrueba[6].length -2] [datosPrueba[6][2].length -1]
)

//Pop es una funcion para poder eliminar el ultimo elemento de un array

const laptops = ["hp","macbook","asus","lenovo"]
console.log("Laptops: ", laptops)
//Retorna el elemento eliminado
console.log("Elemento eliminado",laptops.pop())
console.log("Laptops: ", laptops)

//Supongamos que tenemos una lista de alumnos
const  alumnos = ["Luis","Juan","Maria","Luciana","Lucas"];
console.log("El Alumno" + alumnos.pop() + "fue eliminado");
console.log("Alumnos",alumnos)


//unshift: Esta funcion agrea un elemento a un array pero en la
//primera posicion
alumnos.unshift("Daniel");
console.log("Unshift",alumnos);
//ojo hemos agregado a Daniel
//shift: Esta funcion elimar al primer elemento de un array
console.log(alumnos.shift());
console.log(alumnos);
alumnos[2]="Juanito";
console.log(alumnos);

//indexof : Esta funcion retorna la posicion en base a un dato

const colores = ["Rojo","Verde","Amarillo","Azul","Morado"]

//Nota si tenemos elementos repetidsos va a encontrar al mas cercano
//en este caso es el 1 
// !Es caseSensitive
// Sensible a mayuscula cuando nos referimos a eso quiere decir que
// el texto que se busca debe ser identico tanto en mayuscula como en minuscula

// !Si ustede pone un valor que no existe este retorna-1
//* ¨Podemos usar esto para ver si un elemento existe en un array
console.log(colores.indexOf("verde"));

const busqueda = promp("Ingrese el color");

if (colores.indexOf(busqueda) !== -1) {
    alert("El color si existe y es " + colores[colores.indexOf(busqueda)])

}else {
    alert("El color no existe")
}


