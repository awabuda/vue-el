const API_SERVER = 'https://m.elong.com';
const API_ENDPOINT ='/hotelwxqb';


exports = module.exports = function () {
    var request = require('request');
    var proxy = (path) =>(req,res) =>{
      return req.pipe(request(path + req.url)).pipe(res);

    };
    this.use(API_ENDPOINT,proxy(API_SERVER+API_ENDPOINT));
};
exports.API_SERVER = API_SERVER;
