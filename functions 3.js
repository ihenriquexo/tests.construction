//functions 3
var nomes=[]
var senhas=[]
contador=0
con=true
while (con) {
    opcoes()
uf=prompt("1=parar")}

function recebeValor() {
    nome=prompt("nome")
    nomes[contador]=nome
    senha=prompt("senha")
    senhas[contador]=senha
    contador++
}
function opcoes() {
    op=prompt("1=cadastro|2=login|3=exclusão")
    switch (op) {
        case "1":
            recebeValor(nomes,senhas)
            break;
        case "2":
            fazerLogin(nome,senha)
            break;
        case "3":
            excluirCadastro()
            break;
    
        default:
            break;
    }
}
function fazerLogin(nome,senha) {
    nome=prompt("nick")
    senha=prompt("senha")
    if (nome==nomes&&senha==senhas) {
        console.log(true)
    }else{console.log(false)}
}
function excluirCadastro() {
    var nomesSup=[]
    var senhasSup=[]
    var contSup=0
    nome=prompt("nick de exclusão")

    for (let i = 0; i < nomes.length; i++) {
        if (nome==nomes[i]){
            console.log("excluido")
        }else{nomesSup[contSup]=nomes[i]
        senhasSup=senhas[i]
    contSup++}
        
    }nomes=nomesSup
    senhas=senhasSup
}