

function teste(resolvida, rejeitada){
    setTimeout(()=>{
        if(10<0){
            resolvida("positivo")
        }
        else{
            rejeitada("negativa")
        }
    },3000);

}

// function executarSeResolver(valor){
//     console.log("Resolveu com o valor: "+ valor)
// }

function executarSeRejeitar(valor){
    console.log("Rejeitada com o valor: "+ valor)
}

let minhaPromisse = new Promise(teste);
// *******************************************************************************

minhaPromisse.then(valor => {
    console.log("Resolveu com o valor: "+ valor);
})
.catch(executarSeRejeitar)

console.log(minhaPromisse)