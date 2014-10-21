var express = require('express');
var router = express.Router();

/* Try get json data to select list. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
