
module.exports = function(app){

    app.service('DiscrepancyService', ['$http','$q', 'rootUrl',DiscrepancyService]);

    function DiscrepancyService($http,$q,rootUrl){
        return {
            loadData:function(data){
                return handleRequest('POST',rootUrl+'/mobile/address/listUserAddress.3g',data,$http,$q);
            }
        };
    }

}