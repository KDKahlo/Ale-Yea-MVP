var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Page404 design from 
// https://www.uplabs.com/posts/404-page-ec3ed676-77f6-49c1-9134-83a5fa17c17b

module.exports = router;
