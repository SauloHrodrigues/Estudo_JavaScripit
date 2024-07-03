function baterPalma(texto) {
    console.log(texto);
}

const baterOsPes = function (texto) {
    console.log(texto);
}

const baterCabeca = (texto) => {
    console.log(texto);
}
/*
    - Argumento: Argumento é um valor passado para o parâmetro de uma função
    - Parâmetro: Parâmetro é uma variável declarada dentro de uma função que representa um valor que será passado para a função.
*/

// Callback é uma função passada como argumento para um parâmetro de uma função

const executarCallback = (callback) => {
    callback()
}

const callback = ()=>{
    console.log("Callback executado")
}

executarCallback(callback)


const somar = (a, b) =>{
    return a + b;
}