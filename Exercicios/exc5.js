var dicionario = {4: 'a', 3: 'e', 1: 'i', 5: 's'}
var frase = 'T35t3 d3 35t4g1o'
var aux = frase.split('')

for (i = 0; i < aux.length; i++) {
    if (!isNaN(aux[i]) && aux[i] != " ") {
        aux[i] = dicionario[parseInt(frase[i])]
    } else if (aux[i] == "undefined") {
        aux[i] = " co"
    }
    
}

frase = aux.join('');

console.log(frase)