;(async () => {
  const mysql = require('mysql2/promise')
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'test'
  })
  //  新增
  // const inserRes = await connection.execute(
  //   'INSERT INTO stu (name,age)  VALUES (?,?)',
  //   ['cw', 12]
  // )

  // 更新
  // const updateRes = await connection.execute(
  //   'UPDATE stu SET name = ? WHERE id = ?',
  //   ['cwwww', 4]
  // )
  // console.log('updateRes', updateRes)

  const delRes = await connection.execute('DELETE FROM stu WHERE id = ?', [7])
  console.log('delRes', delRes)

  // 查询
  const [row, fields] = await connection.execute('SELECT * FROM stu ')

  console.log('row', row)
})()
