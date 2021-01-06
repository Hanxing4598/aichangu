
module.exports = function(app){

    app.service('OptionalService', ['$http','$q', 'rootUrl',OptionalService]);

    function OptionalService($http,$q,rootUrl){
        return {
            loadData:function(data){
                return handleRequest('POST',rootUrl+'/mobile/address/listUserAddress.3g',data,$http,$q);
            }
        };
    }

}