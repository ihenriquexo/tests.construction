//functions lição 1
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
//essa é a functions 2
//analisar e re-entender
perguntarNome()


function perguntarNome() {
    nome=prompt("Qual é o seu nome?")
    salario=parseFloat(prompt("Qual é o seu salário?"))
    calcularAumento(nome, salario)
}

function calcularAumento(nome, salario) {
    var aumento=0
    if (salario<1501) {
        aumento=0.2
    }else if(salario<2001){
        aumento=0.15
    }else if (salario<3001) {
        aumento=0.1
    }else if (salario>3000) {
        aumento=0.05
    }
    var novoSalario=salario+(salario*aumento)
console.log("nome de colaborador: "+nome)
console.log("salario: "+salario)
console.log("aumento: "+(aumento*100)+"%")
console.log("salario reajustado: R$"+novoSalario)
}

//functions3- analisar

alternativas()


function perguntarNomeESenha() {
    
    nome=prompt("Qual é o seu nome?")
        nomes=[];nomes[contador]=nome
        senha=prompt("Qual é o sua senha?")
        senhas=[];senhas[contador]=senha
        
}
function login() {
    nomeL=prompt("digite seu nick!")
                    senhaL=prompt("digite sua senha!")
                    if (nomeL==nomes) {
                        if (senhaL==senhas) {
                            console.log(true)
                        }
                    }else{console.log(false)}
}
function excluirLogin() {
    nomesSup=[]
    senhasSup=[]
    contSup=0
    nome=prompt("digite o nome que quer excluir")
    for (let i = 0; i < nomes.length; i++) {
        if (nome==nomes[i]) {
            console.log("user apagado")
        }else{nomesSup[contSup]=nomes[i]
        senhasSup[contSup]=senhas[i]
    contSup++}
        
    }
nomes=nomesSup
senhas=senhasSup
}

        function alternativas() {
            
        
    continuar=true
    while (continuar) {
        opcao=prompt("1=cadastro|2=login|3=parar")
        switch (opcao) {
            case "1":contador=0
                perguntarNomeESenha()
        contador++
                break;
                case "2":contB=0
                login() 
                    contB++
                break;
                case "3":
                    excluirLogin()
                    break
            default:
                console.log("opção invalida!")
                break;
        }
        
        
    }
    
    
}