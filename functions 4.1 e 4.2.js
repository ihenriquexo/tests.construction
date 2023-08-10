//functions 4.1
criarProjeto()
calculoProjeto()

function criarProjeto() {
    nomeProjeto=prompt("nome")
    OrcamentoTotal=parseFloat(prompt("orçamento"))
    
}

function calculoProjeto() {
    nomeProj=prompt("projeto")
    let valor=parseFloat(prompt("valor do projeto"))
    let tipoDespesa=prompt("r=receita|d=despesa")
    if (tipoDespesa=="r") {

        OrcamentoTotal+=valor

    }else if(tipoDespesa=="d"){

        if (OrcamentoTotal-valor<0) {

            return alert("orçamento indisponível")

        }
        OrcamentoTotal-=valor
    }console.log(OrcamentoTotal)
}
//functions 4.2
console.log(verificarNum())
function verificarNum() {
    numero=parseInt(prompt("digite um numero"))
    somaDivisores=0
    for (let i = 0; i < numero; i++) {
        if (numero%i===0) {
            somaDivisores+=i
        };
    }return somaDivisores===numero
}