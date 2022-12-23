/*Rotación de arreglo a la derecha
Debes crear una función llamada “rotar”
que reciba un arreglo y un número,
 y debera retornar un nuevo arreglo
 con los elementos rotados la cantidad
 de veces como sea el número a la derecha.*/
 

 let arr = [1,2,3,4,5];

 function rotar(arr, num){
    var newArr = [...arr];
    for(let i = 0; i < num; i++){
        let numeroQueRota = newArr.pop();
        newArr.unshift(numeroQueRota);
    }
    
    return newArr;
 }