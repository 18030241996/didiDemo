const cartModel = require('../models/cartModel')

module.exports={
    addCart:async  function (ctx) {
        let carts=[
            {
                _id: '0',
                type: 'taxi',
                name: '出租车',
                isActive: true,
                iconUrl: 'http://192.168.0.101:3000/img/taxi.png'
            },
            {
                _id: '1',
                type: 'replace',
                name: '代驾',
                isActive: false,
                iconUrl: 'http://192.168.0.101:3000/img/replace.png'
            },
            {
                _id: '2',
                type: 'fastride',
                name: '快车',
                isActive: false,
                iconUrl: 'http://192.168.0.101:3000/img/fastride.png'
            },
            {
                _id: '3',
                type: 'shunfen.png',
                name: '顺风车',
                isActive: false,
                iconUrl: 'http://192.168.0.101:3000/img/shunfen.png'
            },
            {
                _id: '4',
                type: 'zhuanche',
                name: '专车',
                isActive: false,
                iconUrl: 'http://192.168.0.101:3000/img/zhuanche.png'
            },
            {
                _id: '5',
                type: 'bus',
                name: 'bus',
                isActive: false,
                iconUrl: 'http://192.168.0.101:3000/img/bus.png'
            }
        ];
        await cartModel.create(carts, function(err){
            if(err){
                console.log(err)
            }else{
                console.log('insert success')
            }
        })
    },
    deleteCart:async function (ctx){
        //do delete
        console.log('delete')
    },
    updataCart:async function (ctx){
        //do updata
        console.log('updata')
    },
    selectCart:async function (ctx){
        //do select
        await cartModel.find({},function(err, doc){
            if(err){
                console.log(err)
            }else{
                ctx.body = doc
            }

        })
    }
}