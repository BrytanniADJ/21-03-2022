var nome = "Brytanni" //declarar cadeia
let idade = 19 //declarar número
const sexo = "B" //declarar letra

//imprimir no console
console.log(nome)

const comparaIdade = function (){
    var idadeMax = 30
    if(idade <= idadeMax){
        console.log('idade é menor ', idadeMax)
        console.log(`Idade é menor que ${idadeMax}`)
    }else{
        console.log('Idade é maior' + idadeMax)
    }
}
comparaIdade()
