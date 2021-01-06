
module.exports = function(app){

    app.service('PositionService', ['$http','$q', 'rootUrl',PositionService]);

    function PositionService($http,$q,rootUrl){
        return {
            loadData:function(data){
                return handleRequest('POST',rootUrl+'/mobile/address/listUserAddress.3g',data,$http,$q);
            }
        };
    }

}