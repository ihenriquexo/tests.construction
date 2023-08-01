//só pra backup

var desejaContinuar=true
while (desejaContinuar) {
    console.log("Oi")
var inputUser=prompt("insira 1 se deseja parar")
if(inputUser==1){
    desejaContinuar=false
}

}
//


//resposta exercicio 2
var valorInteiro=10

var contador=0
while (contador<=valorInteiro) {
    console.log(contador<=valorInteiro)
console.log("repetição numero: ",contador*5)
contador++
}

//resposta do exercicio 3
var valorInteiro=-1

var contador=10
while (contador>valorInteiro) {
    console.log(contador>valorInteiro)
console.log("repetição numero: ",contador*5)
contador--
}
//observar mais 1.4
console.log("oi")

var nota;
var sexo;
var contCadastr="s";
var quantAl=0;
var quantH=0
var quantidadeM7=0;
var maiorNH=0;
var somaNotas=0

while (contCadastr=="s") {
    nota=parseInt(prompt("nota"));
sexo=prompt("sexo");


somaNotas+=nota;
   quantAl++;

if (sexo=="1") {
    quantH++;
}
if (nota>maiorNH) {
    maiorNH=nota;
} else if(sexo=="2"&&nota>7){
    quantidadeM7++;
}

contCadastr=prompt("deseja cadastrar outra nota?(s or n)");
}

var mediaGer=somaNotas/quantAl;

console.log("media geral dos alunos: "+mediaGer)
console.log("quantidade de homens: "+quantH)
console.log("quantidade de mulheres com nota + 7: "+quantidadeM7)
console.log("homem com a nota mais alta:"+maiorNH)
//tabuada dos 3 proximos numeros com while
var num=prompt("coloque um numero")

var contador = 1;
while (contador <= 3) {
  console.log(num+"x"+contador+"="+num*contador);
  contador++;
}

//tenta resolver depois
var nome=prompt("digite o nome")
var cpf=prompt("digite o cpf")
var opcao=prompt("digite 1 para saque ou 2 para deposito")
var valor=prompt("qual valor")
var oiv=100
while (cont=true){
    if (opcao=="1") {
    console.log(saldoTOT-valor)
}else if (opcao=="2") {
    console.log(oiv+valor)
}
var cont=prompt("deseja continuar?(s/n)")
var cont=prompt("deseja continuar?(s/n)")

}
//do while
do {
    console.log(condition)
    condition++
} while (condition<5);

//operadores logicos and e or

console.log(2<3&&3<4)
//true e true=true
console.log(2<3&&3<2)
//true ou false=false
console.log(2<3||3<2)
//true or false=true

var idade=prompt("digite a sua idade")
var nacionalidade=prompt("você é brasileiro? digite 1 para sim")

console.log((idade>=16&&nacionalidade!=1))
console.log(idade>=18)

if (idade>=18||(idade>=16&&nacionalidade!=1)){
console.log("pode beber")
}else {
    console.log("não pode beber")
}
//desafio 1-pt 1.1
//Escreva um algoritmo que pergunte ao usuário se ele está com fome e se ele tem
//dinheiro



console.log(2<3&&3<4)
//true e true=true
console.log(2<3&&3<2)
//true ou false=false
console.log(2<3||3<2)
//true or false=true

var fome=prompt("está com fome?(1 for yes)")
var cash=prompt("você tem dinheiro?(y para s")



console.log(fome)
console.log(cash)

if (fome=="1"&&(cash=="y")){
console.log("recomendação:vá a uma lanchonete")
}else if(fome!="1"||cash!="y"){ 
    
    console.log("recomendação:coma em casa")
    
}
//pt 2 da lição
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

        //slet
        case "2":
    var loginSenha=prompt("digite sua senha de login:")
    for (var i=0;i<nomes.length;i++) {
    if(loginName==nomes[i]){
        if(loginSenha==senhas[i]){
            console.log("entrou")
            i=nomes.length
        }
} else if(i==nomes.length-1){
    console.log("nome ou senha incorreta")
    
}
    }
    break;
    case "3" :
        var nomesSup=[]
var senhasSup=[]
var contadorSup=0
var nomeExcluir=prompt("insira o nome que deseja excluir")
for (var i=0;i<nomes.length;i++){
    if (nomeExcluir==nomes[i]){
        console.log("usuario excluido")
    }else{nomes[contadorSup]=nomes[i]
senhasSup[contadorSup]=senhas[i]
contadorSup++
    }
}
nomes=nomesSup
senhas=senhasSup
break;
defalt:
continuar=false
break;

//+1 arrays que eu não entendi
//array ou vetores
//length=comprimento
var modelo = []
var ano= []
var valor=[]
continuar=true
contadorArray=0

//loop para cadastrar novos carros

while (continuar) {

    var modelos=prompt("modelo")
    var anos=parseInt(prompt("ano"))
    var valors =parseFloat(prompt("valor"))
    console.log(modelos+anos+valor)
modelos[contadorArray]=modelo
anos[contadorArray]=ano
valors[contadorArray]=valor
    contadorArray++
    par=prompt("deseja adicionar outro veiculo?(s ou n)")
if (par=="n") {
    continuar=false
}
}
//exibir nome e valor dos carros inseridos
console.log("carros cadastrados")
for (var i =0; i <modelos.length; i++){
    console.log(modelo[i]+", "+anos[i]+", valor: "+valors[i])
}
//ordenar os vetores pelo preço dos carros
for (var i = 0; i < valors.length-1; i++) {
    for (var j = 0; j < valors.length-1; j++) {
        if (valors[j]>valors[j+1]) {
            //trocar a posição dos elementos nos três arrays
            var maiorValor=valores[j]
         valors[j]=valors[j+i]
         valors[j+i]=maiorValor
         
         var modeloMaiorValor=modelos[j]
modelos[j]=modelos[j+i]
valors[j+i]=modeloMaiorValor

var anoMaiorValor=anos[j]
anos[j]=anos[j+i]
anos[j+i]=anoMaiorValor    
}   
    }   
}
//exibir nome, ano e valor dos carros ordenados pelo preço
console.log("Carros ordenados pelo preço:")
for (var i=0; i<modelos.length; i++){
console.log(modelos[i]+", "+anos[i]+", Valor: "+valors[i])
}
//