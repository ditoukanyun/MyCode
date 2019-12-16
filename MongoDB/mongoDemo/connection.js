const mongose = require('mongoose')

//连接mongodb
mongose.connect('mongodb://localhost/test')

// 测试连接
mongose.connection
  .once('open', () => {
    console.log('成功')
  })
  .on('error', error => {
    console.log('error', error)
  })
