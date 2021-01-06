module.exports = function(app , $){
    app.controller('TransactionController', ['$scope','TransactionService',TransactionController]);

    function TransactionController($scope ,PositionService){
        $scope.currentPage = 2;
        $scope.navPage = 5;
    };
};
