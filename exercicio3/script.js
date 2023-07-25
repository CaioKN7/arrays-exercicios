//Exercício 3
const apenasNumeros = [4, 1, 90, 200, 74, 7, 43]
const apenasStrings = ["Zico", "Adílio", "Nunes", "Leandro", "Júnior"]
const todosOsTipos = ["Adriano", "Petkovic", 10, 43, true, false]

const copiaApenasNumeros = apenasNumeros.slice()
const copiaApenasStrings = apenasStrings.slice()
const copiaTodosOsTipos = todosOsTipos.slice()



function adicionarNoInicioDoArray(array) {
    copiaApenasNumeros.unshift(100);
    console.log("Array original:", apenasNumeros);
    console.log("Array cópia:", copiaApenasNumeros);
  }

  adicionarNoInicioDoArray(apenasNumeros);


  function removerUltimoItemDoArray(array) {
    copiaApenasStrings.pop()
    console.log("Array original:", apenasStrings)
    console.log("Array cópia:", copiaApenasStrings)
  }

  removerUltimoItemDoArray(apenasStrings)

  function removerSegundoItemDoArray(array) {
    copiaTodosOsTipos.splice(1, 1);
    console.log("Array original:", todosOsTipos);
    console.log("Array cópia:", copiaTodosOsTipos);
  }

  removerSegundoItemDoArray(todosOsTipos)