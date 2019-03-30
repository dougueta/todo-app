module.exports = function(req, res, next) {
    // res.header('Access-Control-Allow-Origin', '*');
    // res.header('Access-Control-Allow-Origin', 'GET, POST, OPTION, PUT, PATCH, DELETE');
    // res.header('Access-Control-Allow-Origin', 'Origin, X-Requested-With, Content-Type, Accept');
    
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next();
}
