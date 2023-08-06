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