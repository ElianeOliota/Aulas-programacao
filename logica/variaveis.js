let nome = `Eliane Henrique Oliota`
let cidade = `blu`
let bairro = `centro`
// as linhas acima são exemplos de variáveis textuais
console.log(`meu primeiro log`);
console.log(`Qual o valor da variável Nome?` + nome);
console.log(`exibir o valor de Nome:`, nome, "-", cidade, "-", bairro);
/*
tudo que estiver 
aqui, será 
comentado
*/

let idade = 20
let cadeira = 2
let peso = 65.8
let salario = 1235.54
console.log(`os valores das variáveis numéricas são`, idade, cadeira, peso, salario);


idade = 30
cadeira = 3
peso = 99.54
salario = 7896.54

console.warn(`os valores das variáveis numéricas mudaram para`, idade, cadeira, peso, salario)


let aula_facil = false
let prof_top = true

console.error(`as variáveis booleana são:`, aula_facil, prof_top)