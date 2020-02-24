
function maiorString(string1, string2) {

    if (string1.length > string2.length) {
        return string1
    } else if (string2.length > string1.length){
        return string2
    } else {
        return "strings são iguais!"
    }

}

console.log("A string de maior comprimento é:", maiorString("Hakuna", "Matataaa"))
