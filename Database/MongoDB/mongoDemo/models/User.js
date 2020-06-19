// collections
// 如果自行创建了连接，就需要使用 connection 的 model() 函数代替 mongoose 的 model() 函数。
let mongoose = require('../connection')
// let mongoose = require('mongoose')
let Schema = mongoose.Schema

// 定义user的Schema
let UserSchema = new Schema({
  userName: {
    type: String
  },
  password: {
    type: String
  }
})

// String

// Number

// Boolean | Bool

// Array

// Buffer

// Date

// ObjectId | Oid

// Mixed

// 生成model

module.exports = mongoose.model('User', UserSchema)
