/*
 * O que é uma variável?
  - Ao pensar em uma variável pode releciona-la a um caixa, e essa caixa pode vir a conter um conteúdo. 
  - Em JavaScript, variáveis são criadas com a palavra-chave 'var', 'let', ou 'const'.
  - São, em um nível mais baixo, espaços reservados na memória ram que podem ou não conter algo.

 * O que é declarar uma variável?
  - Declarar uma variável é uma etapa onde reservamos um espaço em memória para receber um possível valor.

 * O que é inicializar uma variável?
  - Inicializar uma variável é atribuir um valor inicial a ela.

 * Qual a diferença entra const, let e var:
  - var: é a forma mais base de se declarar uma variável. Possui escopo global. Pode ter valor reatribuido.
  - let: é uma palavra-chave que também permite a declaração de variáveis. Possui escopo local. Pode ter valor reatribuido.
  - const: é uma palavra-chave que também permite a declaração de variáveis. Possui escopo local. Mas, como o nome sugere, seu valor não pode ser 
    reatribuído.
*/

{
    var a = "a"
    let b = "b"
}

console.log(a) // a
console.log(b) // a



