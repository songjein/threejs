var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/2', function(req, res, next) {
  res.render('index2');
});

router.get('/3', function(req, res, next) {
  res.render('index3');
});

module.exports = router;
