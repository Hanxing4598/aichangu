module.exports = function(app , $){
    app.controller('InboxController', ['$scope','InboxService',InboxController]);

    function InboxController($scope ,InboxController){
        $scope.currentPage = 2;
        $scope.navPage = 7;
    };
};
