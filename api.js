const axios = require('axios')

module.exports = axios.create({
    baseURL: 'https://test.mytablemesa.com/api'
})
