module.exports = function(app , $){
    app.controller('DiscrepancyController', ['$scope','DiscrepancyService',DiscrepancyController]);

    function DiscrepancyController($scope ,DiscrepancyService){
        $scope.currentPage = 2;
        $scope.navPage = 6;
    };
};
