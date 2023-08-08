
    nota1=parseInt(prompt("digite sua "+1+"* nota"))
    nota2=parseInt(prompt("digite sua "+2+"* nota"))
    nota3=parseInt(prompt("digite sua "+3+"* nota"))
    op=prompt("a=media aritmetica|p=media ponderada")
    recebe()
function recebe() {
    if (op=="a") {
        return console.log((nota1+nota2+nota3)/3)
    }else if (op=="p"){
        }return console.log((nota1*5+nota2*3+nota3*2)/10)

}