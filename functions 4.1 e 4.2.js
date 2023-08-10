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
//functions 4.3
salarios=[1200,4000,3200,1400]
quantFilhos=[2,0,3,1]
mediaSalario=0
Pmenos1500=0
mediaSalarial()
mediaFilhos()
oMaiorSalario()
calcularPorcentagem()
function mediaSalarial() {
    let somaSalario=0
    for (let i = 0; i < salarios.length; i++) {
        somaSalario+=salarios[i]
        
        
    }
    return console.log(mediaSalario=somaSalario/salarios.length)
}
function mediaFilhos() {
    let somaFilhos=0
    for (let i = 0; i < quantFilhos.length; i++) {
        somaFilhos+=quantFilhos[i]
        
        
    }
    return console.log(mediaFilho=somaFilhos/quantFilhos.length)
}
//obs
function oMaiorSalario() {
    maiorSalario=salarios[0]
    for (let i = 1; i < salarios.length; i++) {
        if (salarios[i]>maiorSalario) {
            maiorSalario=salarios[i]
            
        }
        
    }
    return console.log(maiorSalario)
}
function calcularPorcentagem() {
    contSalar=0
    for (let i = 0; i < salarios.length; i++) {
        if (salarios[i]<=1500) {
            contSalar++
        }
        
    }
    return console.log((contSalar/salarios.length)*100+"%")
}
//functions 4.4
nota1=parseFloat(prompt("nota1"))
nota2=parseFloat(prompt("nota2"))
nota3=parseFloat(prompt("nota3"))
letra=prompt("a=media aritmetica|p=media ponderada")
recebedorDeNotas(nota1,nota2,nota3)
function recebedorDeNotas() {

    if (letra=="a") {
        return console.log(((nota1+nota2+nota3)/3))
    }else if(letra=="p"){
        return console.log(((nota1*5)+(nota2*3)+(nota3*2))/10)
    }   
    }