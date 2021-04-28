const categoryModel = require('../models/Category') //Vamos a utilizar el modelo de Category

/**
 * C = Crear una categoría
 * R = Leer una o más categorías
 * U = Modificar una categoría
 * D = Eliminar una categoría
 */

/**
 * Método para crear una nueva categoría
 * @param {*} req => Todo los datos y la información que el método va a recibir.
 * @param {*} res => Todo lo que nosotros le vamos a devolver al usuario.
 */
exports.create = (req, res) => {
    console.log('Que tiene el body', req.body)
    const category = new categoryModel({
        name: req.body.name,
        description: req.body.description
    })
    //Onteniendo la constante category y utilizando el método save de mongoose
    category.save().then(
        data => {
            res.send(data)
        }
    ).catch(
        error => {
            return res.status(500).send({
                message: error.message
            })
        }
    )
}


/**
 * Método para listar todas las categorías.
 * @param {*} req => Todo los datos y la información que el método va a recibir.
 * @param {*} res => Todo lo que nosotros le vamos a devolver al usuario.
 */
exports.findAll = (req, res) => {
    categoryModel.find().then(
        categories => {
            res.send(categories)
        }
    ).catch(
        error => {
            return res.status(500).send({
                message: 'Error al listar las categorías.'
            })
        }
    )
}


/**
 * Método para modificar una categoría.
 * @param {*} req => Todo los datos y la información que el método va a recibir.
 * @param {*} res => Todo lo que nosotros le vamos a devolver al usuario.
 */
exports.update = (req, res) => {
    const category = {
        name: req.body.name,
        description: req.body.description
    }

    /* El  findByIdAndUpdate debe tener 3 parametros:
    1 => A quién quiero modificar
    2 => Por quién lo quiero modificar.
    3 => (opcional) indica que los datos que se van a devolver son los actualizados.
    */
    categoryModel.findByIdAndUpdate( req.params.id, category, {new: true} ).then(
        data => {
            res.send(data)
        }
    ).catch(
        error => {
            return res.status(500).send({
                message: "Error al modificar"
            })
        }
    )
}

exports.deleteOne = (req, res) => {
    /**
     * El findByIdAndRemove recibe un parametro:
     * 1 => A quién voy a eliminar
     */
    categoryModel.findByIdAndRemove( req.params.id ).then(
        categoryDeleted => {
            res.send(categoryDeleted)
        }
    ).catch(
        error => {
            return res.status(500).send({
                message: 'No se eliminó ninguna categoría'
            })
        }
    )
}


