module.exports = function(app , $){
    app.controller('PositionController', ['$scope','PositionService',PositionController]);

    function PositionController($scope ,PositionService){
        $scope.currentPage = 2;
        $scope.navPage = 3;
    };
};
