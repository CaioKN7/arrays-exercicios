//Exercício 2

const apenasNumeros = [4, 1, 90, 200, 74, 7, 43]
const apenasStrings = ["Zico", "Adílio", "Nunes", "Leandro", "Júnior"]
const todosOsTipos = ["Adriano", "Petkovic", 10, 43, true, false]



function imprimeQuantidadeDeItens(numeros, strings, tipos) {

console.log(numeros.length)
console.log(strings.length)
console.log(tipos.length)

}

imprimeQuantidadeDeItens(apenasNumeros, apenasStrings, todosOsTipos)


function imprimePosicao(numeros, strings, tipos) {

console.log(numeros[0])
console.log(strings[1])
console.log(tipos[2])
const verificaNumeroApenasNumeros = apenasNumeros.includes(90);
const verificaStringEmTodosOsTipos = todosOsTipos.includes("Zico");

console.log(verificaNumeroApenasNumeros);
console.log(verificaStringEmTodosOsTipos);
    
}

imprimePosicao(apenasNumeros, apenasStrings, todosOsTipos)
