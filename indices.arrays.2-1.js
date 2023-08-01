//indices
var array=[]
var indicesEncontrados=[]
for (let i = 0; i < 10; i++) {
    numero=parseInt(prompt("insira numero"+(i+1)))
    array[i]=numero}
nProcura=parseInt(prompt("digite o numero q qér ve no array"))
contador=0
    
for (let i = 0; i < array.length; i++) {
    if (array[i]==nProcura) {
        indicesEncontrados[contador]=i
        contador++
    }
}
console.log("O número inserido aparece nos indices:"+indicesEncontrados)