
var string1 = 'teste 1 de 2 string 3'
var space = ' '

var aux = string1.split(space)

for (i = 0; i < aux.length; i++) {
    if (!isNaN(aux[i])) {
        aux[i] = "[removido]"
    }
}

string1 = aux.join(' ');

console.log(string1)