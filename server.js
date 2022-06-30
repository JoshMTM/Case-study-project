const http = require('http')
const app = require('./backend/app')
const request = require('request')


const url = 'https://api.openbrewerydb.org/breweries/'
const port = process.env.PORT || 3000

app.set('port', port)
const server = http.createServer(app)

// request({ url: url + 'MadTree Brewing' }, (error, response) => {
//     const data = JSON.parse(response.body)
//     console.log(data)
// })

server.listen(port)
