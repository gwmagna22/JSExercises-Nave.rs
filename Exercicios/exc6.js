
//import Axios from 'axios'

let axios = require('axios')

axios.get('http://viacep.com.br/ws/96010770/json/')
    .then(function(response) {
        dados = response.data
        let stringMaiuscula = `${dados.logradouro}, ${dados.bairro}, ${dados.localidade}/${dados.uf}`
        console.log(stringMaiuscula.toUpperCase())
    })
    .catch(function(error) {
        console.log(error)
    })



