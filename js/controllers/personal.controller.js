module.exports = function(app , $){
    app.controller('PersonalController', ['$scope','PersonalService',PersonalController]);

    function PersonalController($scope ,PersonalController){
        $scope.currentPage = 2;
        $scope.navPage = 8;
    };
};
