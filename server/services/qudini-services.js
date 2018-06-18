// var qudiniServices = require('./qudini-services');
module.exports = (function(app){
    var services = {};
    return {
        apiMe: function(){
            return services[name]
        },

        getAll: function(){
            return services;
        }
    }
}());