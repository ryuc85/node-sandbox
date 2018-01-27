var hash = require('crypto');



exports.md5 = function (src) {
    var md5hash = hash.createHash('md5');
    return md5hash.update(src, 'binary').digest('hex');
};