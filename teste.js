console.log(verificarNum())
//

function verificarNum() {
    numero=parseInt(prompt("digite um numero"))
    somaDivisores=0
    for (let i = 0; i < numero; i++) {
        if (numero%i===0) {
            somaDivisores+=i
        };
    }return somaDivisores===numero
}