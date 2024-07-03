const buscarNoBackend = () => {
    return new Promise((resolve, reject) => {
        // Executa logica para buscar dado do backend

        setTimeout(() => {
            // Método executado como sinal de sucesso de um promise, contendo os dados que ela deseja retornar
            resolve('dados do backend');
        }, 2000);
        // Método executado como sinal de falha de um promise, contendo o erro ou mensagem de erro que ocasionou a falha
        // reject('Ocorreu um erro ao buscar no backend');
    })
}

// Forma de resolver uma promise e obter os dados do resolve dela.
const obterDado = buscarNoBackend().then((valor) => {
    console.log(valor)
}).catch((erro) => {
    console.log("Erro:" + erro)
})

const capturarDadosDoBackend = async () => {
    // Forma de resolver uma promise e obter os dados do resolve dela.
    return await buscarNoBackend()
}

/**
 * Pontos principais para se ententer:
 * - Uma promise é uma estrura do js utilizada em requisições assíncronas.
 * - Uma promise poder ser resolvida ou rejeitada.
 * - Para obter o valor de um promise é preciso utilizar ou then/catch ou async/await
 * - Async faz com que sua função retorne uma Promise e te permite utilizar o await dentro da função.
 * - Then é um método de promise que é utilizado para capturar o valor do resolve da promise.
 * - Catch é um métod de promise que é utilizado para capturar o valor do reject da promise.
 */