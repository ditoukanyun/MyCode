;(async () => {
  const mysql = require('mysql2/promise')
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'test'
  })
  const [row, fields] = await connection.execute('SELECT * FROM stu ')
  console.log('fields', fields)
  console.log('row', row)
})()
