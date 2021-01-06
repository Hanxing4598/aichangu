
module.exports = function(app){

    app.service('InboxService', ['$http','$q', 'rootUrl',InboxService]);

    function InboxService($http,$q,rootUrl){
        return {
            loadData:function(data){
                return handleRequest('POST',rootUrl+'/mobile/address/listUserAddress.3g',data,$http,$q);
            }
        };
    }

}