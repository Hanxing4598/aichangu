module.exports = function(app , $){
    app.controller('EditController', ['$scope','EditService',EditController]);

    function EditController($scope ,EditService){
        $scope.currentPage = 2;
        $scope.navPage = 9;
    };
};
