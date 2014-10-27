var express = require('express');
var router = express.Router();
var multilanguage = require('../tplCtrl/languageLinks.js');

router.get('/', function(req, res) {

    multilanguage.url(req.protocol, req.get('host'), '');

    res.render('index', {
        title: 'Express',
        href: multilanguage.link.languages
    });
});
console.log(multilanguage.link.languages);
module.exports = router;
