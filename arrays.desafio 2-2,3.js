//arrays desafio 2.2
array=[]
for (let i = 0; i < 5; i++) {
    arrayy=prompt("digite o "+(i+1)+"numero")
    array[i]=arrayy
    console.log(array[i])}

    for (i = 4; i > -1; i--) {
        console.log(array[i])


}
//arrays desafio 2.3
numero=parseInt(prompt("digite um numero"))
fibonacci=[]
fibonacci[0]=numero-1
fibonacci[1]=numero

for (let i = 2; i < 10; i++) {
    fibonacci[i]=fibonacci[i-1]+fibonacci[i-2]
}
console.log("fibonacci: "+fibonacci)
//procurar entender mais sobre porque eu entendi mas não compreendi direito
