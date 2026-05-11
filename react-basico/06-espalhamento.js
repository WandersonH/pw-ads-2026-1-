// encontrar o  menor e maior numero em uma serie

let minimo = Math.min(2, -5, 4, 0, 11, -1)
let maximo = Math.max(2, -5, 4, 0, 11, -1)

console.log('Valores minimo e maximo determinados a partir de valores avulsos')
console.log({minimo ,maximo})

console.log( '-'.repeat(80))

// e se os numeros estiverem em um vetor?

const nums =[2, -5, 4, 0, 11, -1]

/*
Math.min() e Math.max() não consegue trabalhar quando os numeros estõ em um vetor
*/
minimo=Math.min(nums)
maximo=Math.max(nums)

console.log('Valores minimo e maximo determinados a partir de um vetor')
console.log({minimo ,maximo})

console.log( '-'.repeat(80))

/*

A Sintaxe de espelhamento(spreading), representa por ... antes do nome de uma váriavel que 
contém um vetor ou um objeto, é capaz de 'descompactar'um vetor em uma serie de valores avulsos
 */

minimo=Math.min(...nums)
maximo=Math.max(...nums)

console.log('Valores minimo e maximo determinados a partir de um vetor')
console.log({minimo ,maximo})

console.log( '-'.repeat(80))


/*
Outros usos para espalhamento
*/

const carro1 ={
    modelo: 'Fiorino',
    marca: 'Fiat',
    ano: 1984,
    cor: 'bege'

}

//"Copiando" carro1 para carr02

// const carro2 = carro1

//para criar uma copia real de um objeto (e não uma nova referencia a ele)
// podemos usar a. sintáxe de espalhamento. Ela desmonta o objeto original e 
//em seguida "remonta", mais em uma nova posiçao de memoria

const carro2 = {...carro1}

//mudando o valor das propriedades carro2
carro2.modelo = 'Fusca',
carro2.marca = 'Volskswagen',
carro2.cor = 'preto',
carro2.ano = 1969

console.log( '-'.repeat(80))

//exibindo ambos os carros
console.log({carro1,carro2})