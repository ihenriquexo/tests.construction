nota1=parseFloat(prompt("nota1"))
nota2=parseFloat(prompt("nota2"))
nota3=parseFloat(prompt("nota3"))
letra=prompt("a=media aritmetica|p=media ponderada")
recebedorDeNotas(nota1,nota2,nota3)
function recebedorDeNotas() {

    if (letra=="a") {
        return console.log(((nota1+nota2+nota3)/3))
    }else if(letra=="p"){
        return console.log(((nota1*5)+(nota2*3)+(nota3*2))/10)
    }
            
          
    }
            
       
        
    
