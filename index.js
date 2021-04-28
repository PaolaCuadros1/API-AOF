const express = require('express') //Estamos utilizando express en nuestro proyecto.
const bodyParser = require('body-parser')

const { connectToDB } = require('./db')


const app = express() //Convertimos en un objeto para itulizar todas las herramientas que tiene.
app.use(bodyParser.json())
connectToDB()

require('./Routes/category')(app)//Se está cargando el archivo de rutas de las categorías y se envía una variable llamada app.
require('./Routes/product')(app)

app.listen( 3000, () => {
    console.log('Nos conectamos!')
} )

