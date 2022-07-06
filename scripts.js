
let nota;
let suma=0;
let aux=0;

cantidad = parseInt (prompt ("Ingrese la cantidad de notas que desea promediar"));

while (aux < cantidad){

    nota = parseFloat (prompt ("Ingrese la segunda nota"));

    if (isNaN(nota)){
        alert ("Ingrese una nota valida") 
    }
    else {
        suma = suma + nota;
        aux ++;
    }
}
function promedio (nota){
    console.log (suma/cantidad)
}
console.log ("El promedio es");
promedio (nota)
