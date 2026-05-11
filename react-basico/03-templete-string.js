const nome = 'Valcicleide'
const idade = 20
const cidade = 'Morro alto de cima/MG'

// mesclando  strings com variaveis usabdo concatenaçao
const msg1 = 'meu nome é'+ nome + ' , tenho ' + idade + ' Anos e moro em  '+ cidade+ '.'
console.log(msg1)

/*
Mesclando strings e variáveis usando template string
Template string são OBRIGATORIAMENTE delimitados por ' '
(backticks / acentos graves / "crases")
*/

const msg2 = `Meu nome é ${nome}, tenho ${idade} anos e moro em  ${cidade}.`
console.log(msg2)

// Dentro de uma template string, não limitamos a usar apenas variaveis dentro do simbolo${}
//Qualquer 