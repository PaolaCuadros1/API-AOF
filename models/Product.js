const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: { type: String, require: true },
    price: { type: Number, require: true },
    description: { type: String, require: false },
    image: { type: String, require: false },
    //idCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' } //Un producto solo puede tener una categoría. Ejemplo: un producto solo puede ser navideño

    idCategory: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Category' } ], //Un producto puede tener muchas categorías. Ejemplo: Navideño y romantico
    createdDate: { type: Date }, //2021-04-20
    stock: { type: Boolean } //true o false

})

module.exports = mongoose.model('Product', productSchema)