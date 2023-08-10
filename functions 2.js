//functions 2
var nome
var salario
con=true
while (con) {
    perguntarNS()
    denovo()
}


function perguntarNS() {
nome=prompt("nome")    
salario=parseFloat(prompt("salario"))    
console.log(salario)
calcularS(nome,salario)}
function calcularS(nome,salario) {
    aumento=0
    if (salario<1500) {
        aumento=0.2
    }else if (salario<2000) {
        aumento=0.15
    }else if (salario<3000) {
        aumento=0.10
    }else{
        aumento=0.05
    }novoSalario=(salario*aumento)+salario
    console.log("nome "+nome)
    console.log("salario "+salario)
    console.log("aumento "+aumento)
    console.log("novo salario "+novoSalario)}
    function denovo() {
        dnv=prompt("1=parar")
        if (dnv=="1") {
            con=false
        }
    }