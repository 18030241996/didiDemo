import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://192.168.0.101:3000',
  timeout:20000,//请求超时
  withCredentials: false//是否带上token
})
export default{
  async post(url, body){
    try{
      let res = await instance.post(url, body)
      return res.data
    }catch(err){
      console.log(err)
      return {
        code: -1, msg: '请求失败'
      }
    }
  },
  async get(url){
    try{
      let res = await instance.get(url)
      return res.data
    }catch(err){
      console.log(err)
      return {
        code: -1, msg: '请求失败'
      }
    }
  }
}

