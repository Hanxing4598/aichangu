module.exports = function(app , $){
    app.controller('LoginController', ['$scope','LoginService',LoginController]);

    function LoginController($scope ,LoginService){
        $scope.currentPage = 3;
        $scope.noHeader = true;
    };
};
