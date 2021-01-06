
module.exports = function(app){

    app.service('EditService', ['$http','$q', 'rootUrl',EditService]);

    function EditService($http,$q,rootUrl){
        return {
            loadData:function(data){
                return handleRequest('POST',rootUrl+'/mobile/address/listUserAddress.3g',data,$http,$q);
            }
        };
    }

}