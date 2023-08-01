//receber numeros e separa entre impar e par usando arrays|desafio 3.3
penis=[]
par=[]
impar=[]
for (let i = 0; i < 3; i++) {
    pinto=prompt("coloque um numero "+i)
    penis[i]=pinto
console.log(penis.length-1,penis[i],penis)}
contadorP=0
contadorIp=0
for (let i = 0; i < penis.length; i++) {
    if (penis[i]%2==0) {
        par[contadorP]=penis[i]
        contadorP++
        console.log("par "+penis)
    }else{impar[contadorIp]=penis[i]
        contadorIp++
        console.log("impar "+penis)
    }}
console.log("numeros "+penis)
console.log("numeros par "+par)
console.log("numeros impar "+impar)
//array 3.3
A=[]
B=[]
C=[]
for (i= 0; i<5; i++) {
CA=prompt("a|insira o "+(i+1)+"* numero")
CB=prompt("b|insira o "+(i+1)+"* numero")
A[i]=CA
B[i]=CB
console.log(A[i]+"|"+B[i])}

contador=0
for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
if (A[i]==B[j]&&A[i]>5) {
    C[contador]=A[i]
    contador++
}
}
}
console.log(A+"|"+B)
console.log(C)
