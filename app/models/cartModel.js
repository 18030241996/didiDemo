const cartSchema = require('../schemas/cartSchema')
let cartModel = mdb.model('cart',cartSchema,'cart')
module.exports = cartModel
