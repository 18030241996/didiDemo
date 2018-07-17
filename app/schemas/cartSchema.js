const cartSchema=new Schema({
    _id: {
        type:'String',
        required:true
    },
    type: {
        type:'String',
        required:true
    },
    name: {
        type:'String',
        required:true
    },
    isActive: {
        type:'Boolean',
        required:true
    },
    iconUrl: {
        type:'String',
        required:true
    }
})
module.exports = cartSchema;