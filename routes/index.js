var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // 这里的 index 就是模板引擎里面的 index
  res.render('index', { title: 'Express' });
});

module.exports = router;
