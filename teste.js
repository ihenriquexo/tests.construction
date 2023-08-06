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