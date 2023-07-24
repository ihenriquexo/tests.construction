//array ou vetores
//length=comprimento
var modelo = []
var ano= []
var valor=[]
continuar=true
contadorArray=0

//loop para cadastrar novos carros

while (continuar) {

    var modelos=prompt("modelo")
    var anos=parseInt(prompt("ano"))
    var valors =parseFloat(prompt("valor"))
    console.log(modelos+anos+valor)
modelos[contadorArray]=modelo
anos[contadorArray]=ano
valors[contadorArray]=valor
    contadorArray++
    par=prompt("deseja adicionar outro veiculo?(s ou n)")
if (par=="n") {
    continuar=false
}
}
//exibir nome e valor dos carros inseridos
console.log("carros cadastrados")
for (var i =0; i <modelos.length; i++){
    console.log(modelo[i]+", "+anos[i]+", valor: "+valors[i])
}
//ordenar os vetores pelo preço dos carros
for (var i = 0; i < valors.length-1; i++) {
    for (var j = 0; j < valors.length-1; j++) {
        if (valors[j]>valors[j+1]) {
            //trocar a posição dos elementos nos três arrays
            var maiorValor=valores[j]
         valors[j]=valors[j+i]
         valors[j+i]=maiorValor
         
         var modeloMaiorValor=modelos[j]
modelos[j]=modelos[j+i]
valors[j+i]=modeloMaiorValor

var anoMaiorValor=anos[j]
anos[j]=anos[j+i]
anos[j+i]=anoMaiorValor    
}   
    }   
}
//exibir nome, ano e valor dos carros ordenados pelo preço
console.log("Carros ordenados pelo preço:")
for (var i=0; i<modelos.length; i++){
console.log(modelos[i]+", "+anos[i]+", Valor: "+valors[i])
}