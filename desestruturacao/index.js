// desestruturação de objetos
// A desestruturação de objetos acontece a partir do nome da propriedade. Ou seja, para obter o valor de uma propriedade é necessário passar exatamente o nome dela dentro de {}
const aluno = {
    nome: 'Pedro',
    idade: 23,
    unidade: 'Ar'
}

const { nome, idade } = aluno

console.log(nome) // Pedro
console.log(idade) // 23

// desestruturação de arrays
// A desestruturação de objetos acontece a partir do index do elemento. Ou seja, para obter o valor de um array, deve se atentar a posição do elemento desejado.
const numeros = [1, 2, 3, 4, 5]

const [primeiro, segundo] = numeros

console.log(primeiro) // 1