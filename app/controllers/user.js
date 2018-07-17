const userModel = require('../models/userModel')

module.exports={
    addUser:async  function (ctx) {
        let _user=new userModel({username:'bbb',password:'445'})
        await _user.save(function(err){
            if(err){
                console.log(err)
            }
            else {
                console.log('insert success')
            }
        })
    },
    deleteUser:async function (ctx){
        //do delete
        console.log('deleteUser')
    },
    updataUser:async function (ctx){
        //do updata
        console.log('updata')
    },
    selectUser:async function (ctx){
        //do select
        console.log('select')
    }
}