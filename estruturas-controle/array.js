
const numeros = [1, 2, 3, 4, 5]

// Adicionar elemento em um array
numeros.push(6)

// Método de array
// Criar novo array com novos dados a partir de outro array.
const dobro = numeros.map((n)=>{
    return n;
})

// Retorna um novo array com elementos que passarem na condicional
const numerosMenoresQue3 = numeros.filter((n)=>{
    return n < 3
})

// Acessar valor de um array

console.log(numeros[0])


