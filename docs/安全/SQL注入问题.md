# SQL 注入

原理就是用户输入的数据变为了逻辑

加入后台的查询语句是
`select * from user where id = {id}`

当用户输入 id 为 `1 or 1 = 1`

查询语句就变为 `select * from user where id = 1 or 1 = 1`

### 防御

- 关闭错误输出

- 检查数据类型

- 转义

- 参数化查询

`select * from user where id = ?`

- 使用ORM （对象关系映射）

sequelize https://github.com/sequelize/sequelize