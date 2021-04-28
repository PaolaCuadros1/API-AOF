const productModel = require('../models/Product')

/**
 * Método para crear un nuevo producto
 * @param {*} req => Todo los datos y la información que el método va a recibir.
 * @param {*} res => Todo lo que nosotros le vamos a devolver al usuario.
 */
exports.create = (req, res) => {
    const product = new productModel({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        idCategory: req.body.idCategory
    })

    product.save().then(
        data => {
            res.send(data)
        }
    ).catch(
        error => {
            return res.status(500).send({
                message: 'Error al guardar el producto'
            })
        }
    )
}

exports.findAll = (req, res) => {
    productModel.find({})
    .populate('idCategory')
    .exec()
    .then( 
        (products) => res.send(products)
     ).catch(
         error => {
             return res.status(500).send({
                 message: 'No se encontraron productos'
             })
         }
     )
}