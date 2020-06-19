const mongoose = require('mongoose')

//连接mongodb
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true })

// 测试连接
mongoose.connection
  .once('open', () => {
    console.log('连接成功..')
  })
  .on('error', error => {
    console.log('error', error)
  })

module.exports = mongoose
