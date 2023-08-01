//array 4.1-alunos emnores que a media com + de 13 anos
idades=[]
alturas=[]
somaAlturas=0
for (let i = 0; i < 3; i++) {
    idade=prompt("a idade do "+(i+1)+"* aluno")
    altura=prompt("altura do "+(i+1)+"* aluno")
idades[i]=idade
alturas[i]=altura
somaAlturas+=alturas}

mediaAlturas=somaAlturas/alturas.length
contador=0
for (let i = 0; i < 3; i++) {
        if (idades[i]>13&&mediaAlturas>alturas[i]) {
            contador++
        }
        
    }
    

console.log(contador)