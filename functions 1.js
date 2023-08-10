//functions 1
c=[]
contador=0
con=true
while (con) {
    
a=parseInt(prompt("numero a"))
b=parseInt(prompt("numero b"))
op=prompt("1=+|2=-|3=*|4=/")
switch (op) {
    case "1":
        calculaSoma(a,b)
        break;
        case "2":
            calculaSubtração(a,b)
        break;
        case "3":
            calculaMultiplicacao(a,b)
        break;
        case "4":
            calculaDivisao(a,b)
        break;
    default:
        break;
    }console.log(c[contador]);contador++
    dnv=prompt("1=parar")
    if (dnv=="1") {
        con=false
    }}puxarHistorico(a,b)

function calculaSoma(a,b) {
    return c[contador]=a+b
}
function calculaSubtração(a,b) {
    return c[contador]=a-b
}
function calculaMultiplicacao(a,b) {
    return c[contador]=a*b
}
function calculaDivisao(a,b) {
    return c[contador]=a/b
}
function puxarHistorico(a,b) {
    for (let i = 0; i < c.length; i++) {
        console.log("resultado"+c[i])
        
    }
}