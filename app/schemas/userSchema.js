const userSchema=new Schema({
    username: {
        type:'String',
        required:true //姓名非空
    },
    password: {
        type:'String',
        required:true //密码非空
    }
})
module.exports = userSchema;