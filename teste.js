var cinto=prompt("você está com cinto de segurança?(1 para sim)")
var alco=prompt("você está alcolizado?(1 para sim)")
var semaforo=prompt("o semáforo está verde?(1 para sim)")

if(alco=="1"){
console.log("recomendo que estacione o carro e descanse no carro até o efeito do alcol passar")
}else if (cinto!="1"&&semaforo=="1") {
    console.log("recomendo que coloque o cinto e prossiga")
}else if(cinto=="1"&&semaforo!="1"){
console.log("recomendo que espere o sinal ficar verde e prossiga")
}else if(cinto=="1"&&semaforo=="1"){
    console.log("recomendo prossiga")
    }else if(cinto!="1"&&semaforo!="1"){
        console.log("recomendo que coloque o cinto,espere o sinal ficar verde e prossiga")
        }