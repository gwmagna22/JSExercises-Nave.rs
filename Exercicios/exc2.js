
function mudaStrings(funcao, string1, string2) {
    funcao(string1, string2)
}

function imprimeMaiusculo(string1, string2) {
    console.log(string1.toUpperCase(), string2.toUpperCase())
}

mudaStrings(imprimeMaiusculo ,"Hakuna","Matata")