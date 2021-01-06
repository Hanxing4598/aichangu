module.exports = function(app , $){
    app.controller('HomeController', ['$scope','HomeService',HomeController]);

    function HomeController($scope ,HomeService){
       $scope.currentPage = 1;
       new Swiper('.swiper-container', {
           autoplay: 3000,
           autoplayDisableOnInteraction: false,
           simulateTouch: false,
           loop: true
       });
    };
};
