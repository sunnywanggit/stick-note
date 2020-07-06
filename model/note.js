const  Sequelize = require('sequelize');

let sequelize = new  Sequelize(undefined, undefined, undefined, { host: 'localhost', dialect: 'sqlite', storage: '../database/database.sqlite' });

//测试连接是否建立
// sequelize
//     .authenticate()
//     .then(() => { console.log('Connection has been established successfully.'); })
//     .catch(err => { console.error('Unable to connect to the database:', err); });

//创建 Note 模型，一个模型对应到数据库里面就是一个表
let  Note = sequelize.define('note', {
    text: {
        type: Sequelize.STRING,
        field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
    },
}, {
    freezeTableName: true // Model tableName will be the same as the model name
});

Note.sync().then(function () {
    return Note.create({ text: '我要回家', });
});

Note.findAll().then(function (notes) {
    console.log(notes);
});

