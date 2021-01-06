
module.exports = function(app){

    app.service('OrderService', ['$http','$q', 'rootUrl',OrderService]);

    function OrderService($http,$q,rootUrl){
        return {
            loadData:function(data){
                return handleRequest('POST',rootUrl+'/mobile/address/listUserAddress.3g',data,$http,$q);
            }
        };
    }

}