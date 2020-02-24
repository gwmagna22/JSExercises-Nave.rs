var pessoas = [
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
    {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
    {id:3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
]

pessoas.map(function(currentValue) {
    const nameCapitalized = currentValue.nome.charAt(0).toUpperCase() + currentValue.nome.slice(1)
    console.log(`Olá, ${nameCapitalized} ${currentValue.sobrenome}`)
})
