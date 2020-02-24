function concatenaStrings(...comidas) {
    
    var stringConcatenada = ""
    comidas.map(function(currentValue) {
        stringConcatenada += currentValue
    }) 

    console.log(stringConcatenada)
    
}

concatenaStrings("Batata", "Açai", "Chucrute", "Oreo")