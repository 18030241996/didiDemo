const Koa=require('koa2')
const app=new Koa()
const cors = require('koa2-cors')
const mongoose= require('mongoose')
const server = require('koa-static')
const bodyPaser=require('koa-bodyparser')
const views = require('koa-views')
app.use(server(__dirname + '/web'))

mongoose.connect('mongodb://192.168.0.101:27017/user')
global.mdb=mongoose;
global.Schema=mongoose.Schema;
app.use(bodyPaser())
app.use(cors({
    origin: '*'
}))
app.use(views(__dirname + '/web'))
const router=require('./app/router/router')
app.use(router.routes())
app.listen(3000)