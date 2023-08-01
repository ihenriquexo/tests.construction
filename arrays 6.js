nomes=[]
notas=[]
continuar=true
let i = 0
somaNotas=0
while (continuar) {
    
        nome=prompt("digite o nome do "+(i)+"* aluno!")
        nomes[i]=nome
        nota=parseFloat(prompt("digite a nota do "+(i)+"* aluno!"))
        notas[i]=nota
        
        
        i++

    gg=prompt("1=parar")
    if (gg=="1") {
        continuar=false
    }
}
for (let i = 0; i < notas.length; i++) {
    somaNotas=notas[i]+somaNotas;
    
}


mediaGer=somaNotas/nomes.length

    console.log("nomes "+nomes)
    console.log("notas "+notas)
    console.log("soma das notas "+somaNotas)
    console.log("media geral das notas "+mediaGer)

