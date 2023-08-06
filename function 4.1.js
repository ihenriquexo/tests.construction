//meu codigo
a=criarProjeto()
b=CalculoDoprojeto()


function criarProjeto() {
    NomeProjeto=prompt("qual o nome do projeto?")
    OrcamentoTotal=parseInt(prompt("qual o orçamento total?"))
}
function CalculoDoprojeto(NomeProjeto,OrcamentoTotal) {
    NomeProjeto;
    OrcamentoAnterior=OrcamentoTotal
    while (true) {
        TipoDespesa=prompt("qual o tipo de despesa?r=receita|d=despesa")
    if (TipoDespesa=="r") {
        ValorReceita=parseInt(prompt("qual o valor de receita?"))
        OrcamentoTotal+=ValorReceita;console.log("receita adicionada "+OrcamentoTotal)
        return
    }else if(TipoDespesa=="d"){
        Valordespesa=parseInt(prompt("qual o valor da despesa?"))
        Valordespesa-OrcamentoTotal
        if (d<0) {
            console.log("orçamento indisponivel")
            OrcamentoTotal=OrcamentoAnterior
            return
        }else{OrcamentoTotal-=Valordespesa
            console.log("despesa adicionada "+OrcamentoTotal)
            return}
    }else{console.log("tipo invalido digite r para receita ou d para despesa")}
    
} 
}



//resultado


l=criarProjeto()
o=adicionarMovimentacao()
u=verificarNumeroPerfeito()

//variavel para armazenar os projetos e seus saldos
var projetos=[]
var orcamentos=[]
var contador=0
//função para criar um novo projeto
function criarProjeto() {
    var nomeProjeto=prompt("digite o nome do projeto:")
    var orcamentoTotal=parseInt(prompt("digite o orçamento total do projeto:"))
    projetos[contador]=nomeProjeto
    orcamentos[contador]=orcamentoTotal
    console.log("projeto criado com sucesso!")
}
//função para adicionar receita ou despesa a um projeto
function adicionarMovimentacao(nomeProjeto,valor,TipoDespesa) {
    for (let i = 0; i < projetos.length; i++) {
        if (nomeProjeto==projetos[i]) {
            if (TipoDespesa=="r") {
                orcamentos[i]+=valor
            }else if (TipoDespesa=="d"&&valor>orcamentos[i]) {
                console.log("o valor inserido é maior que saldo disponivel")
            }else{
                orcamentos[i]-=valor
            }
            console.log("o saldo atual é de: "+orcamentos[i])
        }
        
    }
}
function verificarNumeroPerfeito(numero) {
    let somaDivisores=0
    for (let i = 1; i < numero; i++) {
        //verifica se i é um divisor de numero
        if (numero%i===0){
            somaDivisores+=i
        }
        
    }
    return somaDivisores==numero
}
//final
nomes=[]
orcamentos=[]
contador=0
criarProjeto()
calcularProjeto()
function criarProjeto() {
    nomes[contador]=prompt("qual o nome do projeto?")
    orcamentos[contador]=parseInt(prompt("qual o orçamento total?"))
    console.log("projeto cria com sucesso!")
}
function calcularProjeto(orcamento,valor,tipo) {
    for (let i = 0; i < nomes.length; i++) {
        nomes[i]
        valor=parseInt(prompt("valor"))
        tipo=prompt("esse valor é? r=receita|d=despesa")
        if (tipo=="r") {
            orcamentos[i]+=valor
        }else if (tipo=="d") {
            if (valor-orcamentos[i]>0) {
                console.log("saldo indisponivel!")
            }orcamentos[i]-=valor
        }console.log(orcamentos[i])
    }
    
}