/* let valor
let pares= []
let inpares=[]

while ((valor = prompt("ingrese valor:")) != 0){
    
    /// pregunto si valor es par lo pusheo en la lista pares, si no lo es, lo pusheo en la lista de impares
    if ((valor % 2) != 0){
        pares.push(valor)
    }
    else{
        inpares.push(valor)
    }
}
/// una vez que terima el while, muestro las listas
console.log(pares)
console.log(inpares) */

/* 11. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el numero mas grande.*/

/* let valores=[991 ,2,3,4,56,6,7,8,5,3,487,2,2,4,5,6,7,4,365,345,354,2]
let maximo= valores[0]
for (let i = 0; i < valores.length; i++) {
    if (valores[i]>maximo){
        maximo = valores[i]
    }
}
console.log(maximo); */

/*
12. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el numero mas chico.
*/

/* let valores=[991 ,2,3,4,56,6,7,8,5,3,487,2,1,4,5,6,7,4,365,345,354,2]
let minimo= valores[0]
for (let i = 0; i < valores.length; i++) {
    if (valores[i]<minimo){
        minimo = valores[i]
    }
}
console.log(minimo); */

/*13. Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo un empate. Caso contrario mostrar un mensaje con el nombre de la persona
ganadora.*/
/* let jugador1
let jugador2
let jugada = false
while(jugada == false){
    jugador1 = prompt("JUGADOR 1:")
    jugador2=prompt("JUGADOR 2:")
    if (jugador1=="tijera" && jugador2=="papel"){
        console.log("GANA JUGADOR 1")
        jugada=true
    }
    if (jugador1=="tijera" && jugador2=="piedra"){
        console.log("GANA JUGADOR 2")
        jugada=true
    }
    if (jugador1=="piedra" && jugador2=="papel"){
        console.log("GANA JUGADOR 2")
        jugada=true
    }    if (jugador1=="piedra" && jugador2=="tijera"){
        console.log("GANA JUGADOR 1")
        jugada=true
    }    if (jugador1=="papel" && jugador2=="tijera"){
        console.log("GANA JUGADOR 2")
        jugada=true
    }
    if (jugador1=="papel" && jugador2=="piedra"){
        console.log("GANA JUGADOR 1")
        jugada=true
    }
} */

/*
14. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado.*/
/* for (let i1 = 0; i1 < 6; i1++) {
    for (let i2 = 0; i2 <i1; i2++) {
        console.log("*");
    }
    console.log("\n");
} */

/*
15. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado
pero invertido.*/
/* for (let i1 = 5; i1 > 0; i1--) {
    for (let i2 = 0; i2 <i1; i2++) {
        console.log("*");
    }
    console.log("\n");
} */

/*
16. Dado un array de 10 numeros desordenados, realizar un programa que imprima por
pantalla el array ordenado. (NO USAR SORT, solo ciclos FOR) */
/* let lista =[5, 4, 3, 8, 32, 768, 564, 95, 172, 1500, 859, 754]

for (let i = 0; i < lista.length; i++) {
    for (let i2 = i+1; i2< lista.length; i2++) {
        let aux
        if(lista[i]>lista[i2]){
            aux=lista[i]
            lista[i]=lista[i2]
            lista[i2]=aux
        }
    }
}
console.log(lista); */