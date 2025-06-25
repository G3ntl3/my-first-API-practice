const express = require('express')
const app = express()
const portNumber = 4000
const cars = [
    { carname: 'benz', color: 'red', price: 100000 },
    { carname: 'audi', color: 'black', price: 200000 },
    { carname: 'bmw', color: 'white', price: 300000 },
    { carname: 'toyota', color: 'blue', price: 400000 },
    { carname: 'ford', color: 'yellow', price: 600000 },
    { carname: 'honda', color: 'green', price: 500000 },
    { carname: 'tesla', color: 'silver', price: 700000 }

]

// app.get('/dashboard', (request,response) => {
//     // response.sendFile(__dirname+'/dashboard.html')
//     // response.sendFile(`${__dirname}/dashboard.html`)
//     console.log({__dirname});
    
//     response.sendFile(`${__dirname}/dashboard.html`)
// })

app.get('/api', (req, res) => {
    
    try {
    res.status(201).json({message:cars})
    } catch(error) {
        res.status(503).json({message:error})
}

})





app.listen(portNumber, () => {
    console.log('this is port 400');
    
})
    // app.get('/', (request,response) => {
    //     response.send('this is request send')
    
    // })
    // app.get('/dashboard', (request,response) => {
    //     response.send(text)
    
    // })