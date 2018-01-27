var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  // This title will show on index page.
  res.render('index', { title: 'Node Sandbox For NSIJ' });
});

module.exports = router;
