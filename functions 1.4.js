//exemplo
//metodo-função

calcularMedia(2,10,20)//chamando|executando a função


function calcularMedia(num1, num2, num3){
    //num1=2
    //num2=10
    //num3=20
    //criando a função
    console.log("A media será calculada aqui")
    console.log((num1+num2+num3)/3)
}
//functions 1.6
c=[]
d=true
continuar=true
while (continuar) {
    if (d==true) {
        a=parseInt(prompt("digite o numero a")),b=parseInt(prompt("digite o numero b"))
    }
    fafa=prompt("o que deseja fazer com esses valores? 1=+|2=-|3=*|4=/")
if (fafa=="1") {
    somarValores(a,b) 
}else if (fafa="2") {
    subtrairValores(a,b)
}else if (fafa="3") {
    multiplicarValores(a,b)
}else if (fafa="4") {
    dividirValores(a,b)
}
cont=prompt("deseja fazer outra operação?1=n")
if (cont=="1") {
    continuar=false
}else{
perg=prompt("com os mesmos valores?1=s")
if (perg=="1") {
    d=false
}
}
}



function somarValores() {
    console.log("valores somados =",c=a+b)
}
function subtrairValores() {
    console.log("valores subtraidos =",c=a-b)
}
function multiplicarValores() {
    console.log("valores multiplicados =",c=a*b)
}
function dividirValores() {
    console.log("valores divididos =",c=a/b)
}