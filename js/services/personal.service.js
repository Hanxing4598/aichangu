
module.exports = function(app){

    app.service('PersonalService', ['$http','$q', 'rootUrl',PersonalService]);

    function PersonalService($http,$q,rootUrl){
        return {
            loadData:function(data){
                return handleRequest('POST',rootUrl+'/mobile/address/listUserAddress.3g',data,$http,$q);
            }
        };
    }

}