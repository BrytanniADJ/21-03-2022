var nome = "Brytanni" //declarar cadeia
let idade = 32 //declarar número
const sexo = "F" //declarar letra

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

  //função, comando de repeticao
const repeticao = function(){
    for(let i = 0; i < 30; i++){
        console.log('> ', i)
    }
}

  //Array
const array = function(){
  //retorna quantidade do array
    let idade = [12, 30, 50, 45, 28, 24, 70, 80]
    console.log(idade.length)

    for (let i = 0; i < idade.length; i++){
        console.log('> ',idade[i])
    }
}
  //objeto
const pessoas = function(){
    let arrayPessoas = []

    let nome = 'Brytanni'
    let idade = 32
    let sexo = 'F'

    let pessoa = {
        nome,
        idade,
        sexo
    }

    }
    arrayPessoas.push(pessoa)

    nome = 'Brya'
    idade = 19
    sexo = 'F'

    pessoa = {
        nome,
        idade,
        sexo
    }
    arrayPessoas.push(pessoa)

    console.log(arrayPessoas)
}

  //declarar comando
const inicio = function(){
    pessoas()
}

  //chamar comando
inicio()
