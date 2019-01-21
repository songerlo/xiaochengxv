// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) =>{
  const wxContext = cloud.getWXContext()
  const sum = event.a + event.b
  var user = await db.collection('userInfo').get()
  return {
    event,
    user,
    sum: sum,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}