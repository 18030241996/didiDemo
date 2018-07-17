const userSchema = require('../schemas/userSchema')
let userModel = mdb.model('user',userSchema,'user')
module.exports = userModel
