// Primera Pre-Entrega -- Felipe Paz -- Calculadora de volumen
// Este codigo intenta simular una calcualdora de volumenes de distintas figuras geometricas
const pi = 3.141592;
const tercio = 0.33333;


let base = 0;
let ancho = 0;
let altura = 0;
let radio = 0;
let figura = 0;
let volumen = 0;
figura = prompt("A continuacion se muestran una lista de figuras para calcular su volumen, por favor elija la de su interes:\n 1- Cubo\n 2 - Prisma Rectangular\n 3 - Cilindro\n 4 - Esfera\n 5- Cono\n");

if (figura == 1) {                  //Cubo
    base = prompt ("Ingrese el valor de base del cubo:\n Recuerde que los valores deben ser expresados en metros");
    volumen = base**3;
    alert ("El volumen del cubo es: " +volumen + " m3");
} else if (figura == 2) {           //Prisma rectangular
        base = prompt ("Por favor ingrese el valor de base del Prisma: \n");
        ancho = prompt ("Ahora ingrese el valor de ancho: \n");
        altura = prompt ("Por ultimo ingrese el valor de altura: \n");
        volumen = base*ancho*altura;
        alert ("el volumen del Prisma es: " + volumen +" m3")
} else if (figura == 3) {           //Cilindro
    radio = prompt ("Ingrese el valor del radio de la circunferencia: \n");
    altura = prompt ("Ahora ingrese la altura del cilindro: \n");
    volumen = pi*radio**2*altura;
    alert = ("el volumen del cilindro es: "+volumen+ "m3")
}
