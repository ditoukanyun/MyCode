let User = require('./models/User')

// 插入数据
function insert() {
  let user = new User({
    userName: '小牛',
    password: '12334'
  })
  user.save((err, res) => {
    if (err) {
      console.log('err', err)
    } else {
      console.log('res', res)
    }
  })
}

// 更新
// 　Model.update(conditions, update, [options], [callback])
function update() {
  let conditionStr = { userName: '小王' }
  let updateStr = { userName: '测试' }
  User.update(conditionStr, updateStr, (err, res) => {
    if (err) {
      console.log('Error:' + err)
    } else {
      console.log('Res:' + JSON.stringify(res))
    }
  })
}

// 删除
function del() {
  let whereStr = { userName: '小黄' }
  User.remove(whereStr, (err, res) => {
    if (err) {
      console.log('Error:' + err)
    } else {
      console.log('Res:' + JSON.stringify(res))
    }
  })
}

// 条件查询
function getByConditions() {
  let whereStr = { userName: '小陈' }
  // 第二个参数可以设置查询输出字段
  //   设置方法如下，1表示查询输出该字段，0表示不输出
  let opt = {
    userName: 1,
    _id: 0
  }
  User.find(whereStr, opt, (err, res) => {
    if (err) {
      console.log('Error:' + err)
    } else {
      console.log('Res:' + JSON.stringify(res))
    }
  })
}

// insert()

// update()

// del()
getByConditions()
