var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res) {

    var dynamicUrl = {
        lang : req.originalUrl.match('/(.*?)/')
    };

    var langFile = JSON.parse(
        fs.readFileSync('./data' + dynamicUrl.lang[0] + 'countries_' + dynamicUrl.lang[1] + '.json', 'utf8')
    );

    res.render('country', {country : langFile.countries});

});

module.exports = router;