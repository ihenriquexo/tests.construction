ids=[]
nomes=[]
precos=[]
avaliacoes=[]
contador=0
cadastrarProduto()
id=prompt("qual o id?")
buscarPorId(id)
nome=prompt("qual o nome?")
buscarPorNome(nome)

//exibe todos os produtos pelo id
for (let o = 0; o < ids.length; o++) {
    console.log(ids[o],nomes[o],precos[o],avaliacoes[o]);
    
}



function cadastrarProduto() {
    var id=contador+1
    nome=prompt("nome do produto")
    preco=parseInt(prompt("preço do produto"))
    avaliacao=prompt("avaliação do produto")
    ids[contador]=id
    nomes[contador]=nome
    precos[contador]=preco
    avaliacoes[contador]=avaliacao
    contador++
}
function buscarPorId(id){
    for (let i = 0; i < ids.length; i++) {
        if (id==ids[i])
        return console.log(ids[i],nomes[i],precos[i],avaliacoes[i])
    }
}
function buscarPorNome(nome) {
    for (let i = 0; i < nomes.length; i++) {
        if (nome==nomes[i])
        return console.log(ids[i])
    }
}