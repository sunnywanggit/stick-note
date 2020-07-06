const path = require('path')
const  Sequelize = require('sequelize');

let sequelize = new  Sequelize(undefined, undefined, undefined, { host: 'localhost', dialect: 'sqlite', storage: path.join(__dirname,'../database/database.sqlite')});

//测试连接是否建立
// sequelize
//     .authenticate()
//     .then(() => { console.log('Connection has been established successfully.'); })
//     .catch(err => { console.error('Unable to connect to the database:', err); });

//创建 Note 模型，一个模型对应到数据库里面就是一个表
let  Note = sequelize.define('note', { text: { type: Sequelize.STRING, }, });

//看一下数据库中是否存在此表，如果不存在则创建此表并写入数据
// Note.sync().then(function () {
//     Note.create({ text: '我要回家', });
// }).then(function () {
//     //raw 获取数据库中的原始数据
//     Note.findAll({raw:true}).then(function (notes) {
//         console.log(notes);
//     });
// });

//查询id=2的数据
// Note.findAll({raw:true,where:{id:2}}).then(function (notes) {
//     console.log(notes);
// })

module.exports = Note

