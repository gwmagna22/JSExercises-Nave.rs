
//import Axios from 'axios'

let axios = require('axios')

axios.get('http://viacep.com.br/ws/96010770/json/')
    .then(function(response) {
        dados = response.data
        console.log(`${dados.logradouro.toUpperCase()}, ${dados.bairro.toUpperCase()}, ${dados.localidade.toUpperCase()}/${dados.uf.toUpperCase()}`)
    })
    .catch(function(error) {
        console.log(error)
    })



