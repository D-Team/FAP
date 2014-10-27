var express = require('express');
var router = express.Router();
var fs = require('fs');
var multilanguage = require('../tplCtrl/languageLinks.js');

router.get('/', function(req, res) {
//    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;


    var dynamicUrl = {
        lang : req.originalUrl.match('/(.*?)/')
    };

    dynamicUrl.page = req.originalUrl.replace(dynamicUrl.lang[0], '');

    // Set uk by default if country path null
    if (!dynamicUrl.lang)
        dynamicUrl.lang = ['/uk/','uk'];

    // read json file
    var langFile = JSON.parse(
        fs.readFileSync('./data' + dynamicUrl.lang[0] + 'countries_' + dynamicUrl.lang[1] + '.json', 'utf8')
    );

    // dynamic create url property
    multilanguage.url(req.protocol, req.get('host'), dynamicUrl.page);

    res.render('country', {
        country : langFile.countries,
        href: multilanguage.link.languages,
        title: langFile.countries[0].official_name
    });

});

module.exports = router;