var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('obj', { title: 'Express' });
});

router.get('/obj', function(req, res, next) {
  res.render('obj', { title: 'Express' });
});

router.get('/mesh', function(req, res, next) {
  res.render('mesh');
});

router.get('/3', function(req, res, next) {
  res.render('index3');
});

module.exports = router;
