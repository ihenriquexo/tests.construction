//entender como funciona
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
            if (noml==nom[index]) {
                if (numl==num[index]) {
                console.log("sucesso!")
                index=nom.length}
            }else if(i==nom.length-1){
                console.log("falha")
            }
    } break;  
    case "3":
        nomesSup=[]
        senhasSup=[]
        contadorSup=0
        nomeExcluir=prompt("insira o nome que quer excluir")
        for(i=0;i<nom.length;i++)
        if (nomeExcluir==nom[i]) {
            console.log("usuário excluido")
        } else {
            nomesSup[contadorSup]=nom[i]
            senhasSup[contadorSup]=senhas[i]
            contadorSup++
        }
    
    nom=nomesSup
    num=senhasSup
    break;
    default:
        continuar=false
break;
}}