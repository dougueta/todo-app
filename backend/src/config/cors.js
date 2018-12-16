module.exports = function(req, res, next) {
    res.header('Access-Contro-Allow-Origin', '*');
    res.header('Access-Contro-Allow-Origin', 'GET, POST, OPTION, PUT, PATCH, DELETE');
    res.header('Access-Contro-Allow-Origin', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
}