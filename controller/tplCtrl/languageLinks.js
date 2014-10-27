var fs = require('fs');

var multiLanguageLinks = JSON.parse(
    fs.readFileSync('./data/language.json')
);
// Function will be use in route controller for dynamic creating multilanguage url
var createUrl = function(protocol, host, page) {
    for (var i = 0; i < multiLanguageLinks.languages.length; i++) {
        multiLanguageLinks.languages[i].url =  protocol + '://' + host + '/' +
            multiLanguageLinks.languages[i].iso + '/' + page;
    }
    return multiLanguageLinks.languages.url;
};

module.exports.link = multiLanguageLinks;
module.exports.url = createUrl;