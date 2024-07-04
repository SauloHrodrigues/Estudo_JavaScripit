/* 
    - O spread operator é um operador utilizado para expandir os elementos de determinada estrutura. Comumente utilizado para obter todos os elementos de uma estrutura e colocalos em outra.
*/

const numeros = [1, 2, 3, 4, 5];

// Utilizando spread operator para expandir os elementos do array

const numerosDuplicados = [...numeros, ...numeros];

console.log(numerosDuplicados); // [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]

const pessoa = {
    nome: 'Pedro',
    idade: 23
}

// Utilizando spread operator para expandir os elementos de um objeto e adicionando nova propriedade

const pessoaClone = {...pessoa, sobrenome: "Cecilio"};

console.log(pessoaClone); // {nome: 'Pedro', idade: 23, sobrenome: "Cecilio"}

// Utilizando spread operator para expandir elementos de um objeto e modificando um elemento provindo desso antigo objeto.

const pessoaModificada = {...pessoa, nome: "Saulo"};

console.log(pessoaModificada); // {nome: 'Saulo', idade: 23}

