var nome = "Brytanni" //declarar cadeia
let idade = 19 //declarar número
const sexo = "B" //declarar letra

//imprimir no console
console.log(nome)

const comparaIdade = function (){
    let idadeMax = 30
    let op = 1
    if(idade <= idadeMax){
        console.log('idade é menor ', idadeMax)
        console.log(`Idade é menor que ${idadeMax}`)
    }else{
        console.log('Idade é maior' + idadeMax)
    }
    switch(op) {
        case 1:
            console.log('Caso 1')
            break;
//caso-escolha
        case 2:
            console.log('Caso 2')
            break;
//caso não
        default:
            console.log('Defalt')
    }
}

//função
const repeticao = function(){
    for(let i = 0; i < 10; i++){
        console.log('> ', i)
    }
}

//chamar comando
const inicio = function(){
    repeticao()
}

inicio()
