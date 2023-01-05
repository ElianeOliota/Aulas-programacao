let idade = 32
let cep = 2587964

console.log(`operador +:`, idade + 10)
console.log(`operador -:`, idade - 21)
console.log(`operador /:`, idade / 2)
console.log(`operador *:`, idade * 2)
console.log(`texto` + (idade + 10))

console.log(`idade?`, idade)

let condicaoA = true
let condicaoB = false
console.log(`OPERADORES LOGICOS && (AND) || (OR) `)
console.log(`operador logico &&:`, condicaoA && condicaoB)

console.log(`true && true:`, true && true)
console.log(`true && false:`, true && false)
console.log(`false && true:`, false && true)
console.log(`false && false:`, false && false)

console.log(`operador logico ||:`, condicaoA || condicaoB)

console.log(`true || true:`, true || true)
console.log(`true || false:`, true || false)
console.log(`false || true:`, false || true)
console.log(`false || false:`, false || false)

console.log(`expressão lógica true && true && false || true:`, true && true && false || true)
console.log(`expressão lógica true || false || false || false:`, true || false || false || false)
console.log(`expressão lógica false && (true || false || true)`, false && (true || false || true))
console.log(`expressão lógica true || (true || false || true)`, true || (true || false || true))