// alguns dados de um usuário
const fullname = 'Jonicleison Junqueira Junior'
const username = 'Junior'
const group  = ' Alunos'

//Criando Um Objeto a partir das variáveis acima

const user1 = {
    fullname: fullname,
    username: username,
    group: group
}

console.log(user1)

/*
Quando o nome da propriedade  de um objeto é identico a da variavel que lhe consederá o valor'
é posssivel usar a sintaxe chamada PROPRIEDADE ABREVIADA. Ela permite não repetir os nomes das variaveis
a  frente do nome da propriedade
*/

const user2 ={
    fullname,
    username,
    group
}

console.log(user2)


const user3 = {
    fullname,
    username,
    password: 'soberanoTricolor',
    group,
    lostLogin: '2026-03-02 11:27:35'
}
console.log(user3)
/*
Usando propriedades  abreviadas para depuração(DEBUG)
*/

const x = 10, y = 'batata'

/*
Exibindo o valor de duas variáveis com console.log()
observe que os valores são mostrados, mas a saída não
informa quais as variaáveirs de onde provem os valores
*/

console.log(x,y)

/*
Saída melhorada: passando um objeto formado pelas variáveis
como propriedades abreviadas para o console.log(), conseguimos
identificar de onde vem los valores
*/

console.log({x,y})

