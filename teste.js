continuar=true
resultadosOp=[]
contador=0
while (continuar) {
a=parseInt(prompt("numero A"))
b=parseInt(prompt("numero B"))
opcao=prompt("1=+|2=-|3=*|4=/")
switch (opcao) {
    case "1":
            resultadosOp[contador]=somarValores(a,b)
        console.log(somarValores(a,b))
        break;
        case "1":
            resultadosOp[contador]=multiplicarValores(a,b)
        console.log(subtrairValores(a,b))
        break;
        case "1":
            resultadosOp[contador]=multiplicarValores(a,b)
        console.log(multiplicarValores(a,b))
        break;
        case "4":
            resultadosOp[contador]=dividirValores(a,b)
        console.log(dividirValores(a,b))
        break;

    default:
        console.log("opção invalida!")
        break;
}contador++
parar=prompt("deseja parar?1=sim")
if (parar=="1") {
    continuar=false
}
}
console.log(resultadosOp)


function somarValores(a,b) {
    return a+b
}
function subtrairValores(a,b) {
    return a-b
}
function multiplicarValores(a,b) {
    return a*b
}
function dividirValores(a,b) {
    return a/b
}


//eu vo refazer os functions
//function perguntarNome(){
  //  nome=prompt("Qual seu nome?")
    //ou
    //nome=("coloque seu nome")
    //return nome
//}
//essa é a functions