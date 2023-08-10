salarios=[1200,4000,3200,1400]
quantFilhos=[2,0,3,1]
mediaSalario=0
Pmenos1500=0
mediaSalarial()
mediaFilhos()
oMaiorSalario()
function mediaSalarial() {
    let somaSalario=0
    for (let i = 0; i < salarios.length; i++) {
        somaSalario+=salarios[i]
        
        
    }console.log(mediaSalario=somaSalario/salarios.length)
}
function mediaFilhos() {
    let somaFilhos=0
    for (let i = 0; i < quantFilhos.length; i++) {
        somaFilhos+=quantFilhos[i]
        
        
    }console.log(mediaFilho=somaFilhos/quantFilhos.length)
}
//obs
function oMaiorSalario() {
    maiorSalario=salarios[0]
    for (let i = 1; i < salarios.length; i++) {
        if (salarios[i]>maiorSalario) {
            maiorSalario=salarios[i]
            
        }
        
    }
    console.log(maiorSalario)
}