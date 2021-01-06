
module.exports = function(app){

    app.service('TransactionService', ['$http','$q', 'rootUrl',TransactionService]);

    function TransactionService($http,$q,rootUrl){
        return {
            loadData:function(data){
                return handleRequest('POST',rootUrl+'/mobile/address/listUserAddress.3g',data,$http,$q);
            }
        };
    }

}