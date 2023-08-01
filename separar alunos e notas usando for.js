//arrays-vetores
//length-comprimento
var quantA=2;var somas=0;
var quantH=0;var mm7=0;
var mnH=0;
for (var cont = 1; cont<=quantA; cont++) 
{var nota=parseFloat(prompt("qual a nota(0 a 10)?"+cont))  
;var sexoA=prompt("qual o sexo?(m/f)"+cont)
;somas+=nota;
var mediaN=(somas/quantA)
;console.log(mediaN);
if (sexoA==="m") {quantH++; 
    if (nota>mnH) {mnH=nota}
}else if (sexoA==="f"&&7<nota) {mm7++}}
console.log("quanth "+quantH+" median "+mediaN+" mm7 "+mm7+" mnh "+mnH)
//while-enquanto
//separar usando sexo e notas
medG=0
QdA=2
QdH=0
QdMM7=0
mnH=0
cont=1
somas=0
while (cont<=QdA) {
    var nota=parseFloat(prompt("qual a nota?(0 a 10) "+cont))  
var sexoA=prompt("qual o sexo?(h/f) "+cont)
cont++
somas+=nota
if (sexoA=="h") {
    QdH++
if (nota>mnH) {
    mnH=nota
}}else if (sexoA=="f"&&7<nota) {
    QdMM7++
}}var mediaN=somas/QdA
    console.log("quant h "+QdH+" media nota "+mediaN+" mulher+7 "+QdMM7+" mnh "+mnH)
    //caixa eletronico
    nome=prompt("digite seu nome")
continuar=true
saldoTotal=0
i=0
med=0
while(continuar){
op=(prompt("1 saque/2 deposito"))
valor=parseFloat(prompt("qual o valor?"))
console.log("valor inserido "+valor)
switch (op) {
    case "1":
        saldoTotal=saldoTotal-valor
        if(saldoTotal<valor){
            console.log("saldo insuficiente");}
        break;
        case "2":
            saldoTotal=saldoTotal+valor
        break;}
        i++;console.log(i)

rm=saldoTotal/i
if (valor<=valor) {
    console.log("maior valor "+valor)}
    console.log("media "+rm)
    console.log(saldoTotal)
var conte=prompt("(1)parar|(2)continuar")
if (conte=="1") {
    continuar=false
}
}
//caixa while
nome=prompt("digite seu nome")
continuar=true
saldoTotal=0
i=0
med=0
while(continuar){
op=(prompt("1 saque/2 deposito"))
valor=parseFloat(prompt("qual o valor?"))
console.log("valor inserido "+valor)
switch (op) {
    case "1":
        saldoTotal=saldoTotal-valor
        if(saldoTotal<valor){
            console.log("saldo insuficiente");}
        break;
        case "2":
            saldoTotal=saldoTotal+valor
        break;}
        i++;console.log(i)

rm=saldoTotal/i
if (valor<=valor) {
    console.log("maior valor "+valor)}
    console.log("media "+rm)
    console.log(saldoTotal)
var conte=prompt("(1)parar|(2)continuar")
if (conte=="1") {
    continuar=false
}
}
//

