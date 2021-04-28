const mongoose = require('mongoose')//Vamos a utilizar la librería mongoose.

const connectToDB = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/aof', { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
        if(error){
            console.log('Tenemos un error ', error)
        }else{
            console.log('Nos conectamos a la DB')
        }
    } )
}

module.exports = { connectToDB }