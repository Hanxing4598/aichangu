module.exports = function(app , $){
    app.controller('OrderController', ['$scope','OrderService',OrderController]);

    function OrderController($scope ,OrderService){
        $scope.currentPage = 2;
        $scope.navPage = 4;
    };
};
