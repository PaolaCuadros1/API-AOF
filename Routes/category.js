
/**
 * Método para crear las rutas de Categoria
 * @param {*} app => El objeto de express que se creó en el archivo index.js
 */
module.exports = (app) => {
    const categoryController = require('../controllers/categoryController')

    /**
     * Verbos del protocolo HTTP
     * POST: Se utiliza para almacenar información y trabajar con el login.
     * GET: Obtener información -> por medio de la url
     * PUT: Se utiliza para modificar la información. Se envía la información respecto a quién quiero modificar por la url
     * DELETE: Se utiliza para eliminar la información y también se envía a quién queremos eliminar por la url.
     */

    app.post('/category/create', categoryController.create)
    app.put('/category/update/:id', categoryController.update )
    app.get('/category/getAll', categoryController.findAll )
    app.delete('/category/deleteOne/:id', categoryController.deleteOne )
    
}

