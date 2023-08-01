//array separar infos de carro por categorias

Modelo=[]
Ano=[]
Valor=[]
contador=0
contnua=true

while (contnua) {
    cModelo=prompt("modelo")
    cAno=prompt("ano")
    cValor=prompt("valor")
    Modelo[contador]=cModelo
    Ano[contador]=cAno
    Valor[contador]=cValor
    contador++
    pr=prompt("deseja continuar?(n=não)")
    if (pr=="n") {
        contnua=false
    }
}
for (i = 0; i < Modelo.length; i++) {
    console.log(Modelo[i]+", "+Ano[i]+" valor "+Valor[i])
}
for (let i = 0; i < Valor.length-1; i++) {
    for (let j = 0; j < Valor.length-i-1; j++) {
        if(Valor[j]>Valor[j+1]){
        maiorValor=Valor[j]
        valor[j]-Valor[j+1]
        valor[j+1]=maiorValor

        modeloMaiorValor=Modelo[j]
        Modelo[j]-Modelo[j+1]
        Modelo[j+1]=modeloMaiorValor

        anoMaiorValor=Ano[j]
        Ano[j]-Ano[j+1]
        Ano[j+1]=anoMaiorValor

        }
    }
    
    
}
for (let i = 0; i < Modelo.length; i++) {
    console.log(Modelo[i]+" "+Ano[i]+" "+Valor[i])
    
}