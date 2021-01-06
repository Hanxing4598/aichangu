
module.exports = function(app){

    app.service('HomeService', ['$http','$q', 'rootUrl',HomeService]);

    function HomeService($http,$q,rootUrl){
        return {
            loadData:function(data){
                return handleRequest('POST',rootUrl+'/mobile/address/listUserAddress.3g',data,$http,$q);
            }
        };
    }

}