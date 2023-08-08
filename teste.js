salario=[1500,1600,3200,4000]
numeroF=[1,0,3,2]
porcentagemAte1500()
MediaSalarial()
MaiorSalario()
//criar functions\mediaSalarial|v,mediadeFilhos|v,maiorSalario|

function MediaSalarial() {
    somaSalarios=0
     for (let i = 0; i < numeroF.length; i++) {
        somaSalarios+=salario[i]
        
     }medias=somaSalarios/(numeroF.length+1)
        return console.log(medias)
        
    
}

function mediadeFilhos() {
    somaFilhos=0
     for (let i = 0; i < numeroF.length; i++) {
        somaFilhos+=numeroF[i]
        
     }mediaf=somaFilhos/(numeroF.length+1)
        return console.log(mediaf)
        
    
}

function MaiorSalario() {
    maiorSalario=salario[0]
     for (let i = 1; i < salario.length; i++) {
        if (salario[i]>maiorSalario) {
            maiorSalario=salario[i]
        }
    }
    return console.log(maiorSalario)
}
function porcentagemAte1500() {
    contSalarios=0
    for (let o = 0; o < salario.length; o++) {
        if (salario[o]<=1500) {
            contSalarios++
        }
        
    }
    return console.log(((contSalarios/salario.length)*100+"%"))
}