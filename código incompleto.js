//codigo incompleto
con=true
nom=[]
//nom=nomes
num=[]
//num=senhas
cont=0
while (con) {
    op=prompt("1-cadastro|2-login|3-encerrar op")
    switch(op){
        case "1":
            nomh=prompt("nome "+cont)
    nom[cont]=nomh
    numh=prompt("numero "+cont)
    num[cont]=numh
    cont++
    console.log(nom,num)
        break;
        case "2":
            noml=prompt("login name")
            numl=prompt("senha")
            for (var index = 0; index < nom.length; index++) {
             
                
            if (noml==nom[index]&&numl==num[index]) {
                console.log("sucesso!")
            }else if(noml!=nom[index]||numl!=num[index]){
                console.log("falha no login")
            }
    }    }
    dc=prompt("deseja parar?1=s")
    if (dc=="1") {
        con=false
    }
}
//aparece falha e sucesso de uma vez só