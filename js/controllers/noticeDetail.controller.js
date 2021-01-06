module.exports = function(app , $){
    app.controller('NoticeController', ['$scope','NoticeService',NoticeController]);

    function NoticeController($scope ,NoticeService){
        $scope.currentPage = 3;
    };
};
