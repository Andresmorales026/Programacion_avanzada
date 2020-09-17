function calculardistancia(coordenadax,coordenaday){

    let cuadradox = Math.pow(coordenadax, 2);
    let cuadradoy = Math.pow(coordenaday, 2);

    let sumaCuadrados = cuadradox + cuadradoy;

    let raizcuadrada =Math.sqrt(sumaCuadrados); 

    return (raizcuadrada);

}

console.log(calculardistancia(70 , -50));