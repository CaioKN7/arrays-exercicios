//Exercício 2

function imprimePosicao() {
const apenasNumeros = [4, 1, 90, 200, 74, 7, 43]
const apenasStrings = ["Zico", "Adílio", "Nunes", "Leandro", "Júnior"]
const todosOsTipos = ["Adriano", "Petkovic", 10, 43, true, false]

console.log(apenasNumeros[0])
console.log(apenasStrings[1])
console.log(todosOsTipos[2])
const verificaNumeroApenasNumeros = apenasNumeros.includes(90);
const verificaStringEmTodosOsTipos = todosOsTipos.includes("Zico");

console.log(verificaNumeroApenasNumeros);
console.log(verificaStringEmTodosOsTipos);

}

imprimePosicao()
