
module.exports = function(app){

    app.service('NoticeService', ['$http','$q', 'rootUrl',NoticeService]);

    function NoticeService($http,$q,rootUrl){
        return {
            loadData:function(data){
                return handleRequest('POST',rootUrl+'/mobile/address/listUserAddress.3g',data,$http,$q);
            }
        };
    }

}