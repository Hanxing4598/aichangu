
module.exports = function(app){

    app.service('LoginService', ['$http','$q', 'rootUrl',LoginService]);

    function LoginService($http,$q,rootUrl){
        return {
        };
    }

}