//Desafio de lógica 03 - For and While
for(let n1 = 1; n1 < 11; n1++){
    console.log(n1)
}

let n2 = 11
while(n2>1){
    n2= n2-1
    console.log(n2)
}
im =1
while(im<100){
    console.log(im)
    im=im+2
}
for(let par =0;par <=100; par+=2){
    console.log(par)
}

//Desafio de lógica 04 - Funções

//Mensagem
function mensagem(){
    console.log("Olá")
}
//variáveis
let n="João Pedro"
let id=17
let e="Rock"
let f="O conde de Montecristo"
let mf="Planet Caravan"
//Nome
function name(a){
    console.log(a)
}
name(n)
//Nome,idade,estilo musical
function nem(a,b,c){
    console.log(`Meu nome é ${a}, tenho ${b} anos e gosto de ${c}`)
}
nem(n,id,e)
//Filme,Música
function FM(a,b){
    console.log(`Meu filme favorito é ${a} e minha música favorita é ${b}`)
}
FM(f,mf)
//Triplo
function triplo(x){
    return x * 3
}
let x=triplo(2)
console.log(x)

//Desafio de lógica 05 - Array

let classe= ["B","C","D","E","F"]
console.log(classe)
//adicionar início
classe.unshift("A")
console.log(classe)
//remover último
classe.pop()
console.log(classe)
//adicionar dois nomes
classe.push("F","G")
console.log(classe)
//remover primeiro nome
classe.shift()
console.log(classe)
//organização crescente
const numbers=[7,5,6,3,8,2,1,4]
numbers.sort()
console.log(numbers)

//Desafio de lógica 06 - Estrutura de dados complexos (Array e Objeto)

let carac = {
    nome:"João Pedro",
    idade:17,
    humano:true,
}
console.log({carac})
//adicionar nova propriedade
carac.cabelo="preto"
console.log({carac})
//remoção do objeto
delete carac.cabelo
console.log({carac})
//cadastro
let cadastro= [
    {
        nome:"João Pedro",
        idade:17,
        telefone:4002-8922,
        amigos:["Jaime","Pedro","João","Rafael","Carlos"]
    },
    {
        nome:"João Pedro",
        idade:17,
        telefone:4002-8922,
        amigos:["Jaime","Pedro","João","Rafael","Carlos"]
     
    },
    {
        nome:"João Pedro",
        idade:17,
        telefone:4002-8922,
        amigos:["Jaime","Pedro","João","Rafael","Carlos"]
      

    },
    {
        nome:"João Pedro",
        idade:17,
        telefone:4002-8922,
        amigos:["Jaime","Pedro","João","Rafael","Carlos"]
        

    },
    {
        nome:"João Pedro",
        idade:17,
        telefone:4002-8922,
        amigos:["Jaime","Pedro","João","Rafael","Carlos"]
    },
 
]
   console.log(cadastro[0].amigos[0])
   console.log(cadastro[1].amigos[1])
   console.log(cadastro[2].amigos[2])
   console.log(cadastro[3].amigos[3])
   console.log(cadastro[4].amigos[4])