const Router=require('koa-router')
const user=require('../controllers/user')
const cart=require('../controllers/cart')
const Index=require('../controllers/index')
let router=new Router()

router.get('/',Index.index)
router.get('/user',async (ctx)=>{
    await user.addUser(ctx)
    user.deleteUser(ctx)
    user.selectUser(ctx)
    user.updataUser(ctx)
    ctx.body='get user .'
})
router.get('/cart',async (ctx)=>{
    if(ctx.query.querystring=='select'){
        await cart.selectCart(ctx)

    }else if(ctx.query.querystring=='add'){
        await cart.addCart(ctx)
        ctx.body='add.'
    }else{
        ctx.body=ctx.query
    }

})
module.exports = router