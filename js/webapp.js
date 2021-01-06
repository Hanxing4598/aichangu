"use strict";
module.exports = function(angular , $){
    var webapp = angular.module("webapp",[]);
    
    webapp.config(["$httpProvider", function ($httpProvider) {
　　　　　//更改 Content-Type
         $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=utf-8";
         $httpProvider.defaults.headers.post["Accept"] = "*/*";
         $httpProvider.defaults.transformRequest = function (data) { 
             //把JSON数据转换成字符串形式
             if (data !== undefined) { 
                 return $.param(data);
             }
             return data;
         };
    }]);

    webapp.filter('trustHtml', function ($sce) {
        return function (input) {
            return $sce.trustAsHtml(input);
        }
    });


    var serviceRootPath = '/web';
    //var serviceRootPath = '/jtrade';
    webapp.constant('domain', 'http://localhost');
    webapp.constant('rootUrl', serviceRootPath);

    webapp.filter('number2',function(){
        return function(str,fixedNUm){
            if(!isNaN(str)){
                if(fixedNUm && !isNaN(fixedNUm)){
                    str = parseFloat(str).toFixed(fixedNUm);
                }else{
                    str = parseFloat(str).toFixed(2);
                }
            }
            return str;
        }
    });

    webapp.constant('loginFun',loginFun);

    function loginFun(fn){
        sessionStorage.removeItem('user');
        $.post(serviceRootPath+'/login/userCenterInfo',{},function(res){
            res = JSON.parse(res);
            if(res.code == 0){
                sessionStorage.setItem('user',JSON.stringify(res.result));
            }else{
                sessionStorage.removeItem('user');
            }
            if(fn && typeof fn == 'function'){
                fn();
            }
        });
    }


    function pageHeaderEvtBind(){
        var changeTheme = $('.change_theme');
        if(changeTheme.length > 0){
            var user = sessionStorage.getItem('user');
            if(user && user.length > 10){
                user = JSON.parse(user);
                $('.head-user > .title').text(user.phone);
            }
            var nowTheme = sessionStorage.getItem('theme');
            if(!nowTheme){
                sessionStorage.setItem('theme','theme-night');
            }
            changeTheme.bind('click',function(){
                var theme = sessionStorage.getItem('theme');
                theme = theme == 'theme-night' ? 'theme-day' : 'theme-night';
                sessionStorage.setItem('theme',theme);
                location.href=location.href;
            });
            $('.select_lang > dd > a').bind('click',function(){
                sessionStorage.setItem('i18n',this.getAttribute('data-lang'));
                location.href=location.href;
            });
        }else{
            setTimeout(function(){
                pageHeaderEvtBind();
            },200);
        }
    }
    pageHeaderEvtBind();

    window.handleRequest = function(method , url , data , $http , $q){
        var defered = $q.defer();
        var random = Math.random()*100;
        url=url.indexOf('&')!=-1 ? url+'&r='+random : url+'?r='+random;
        var config = {
            method : method,
            url : url
        };

        if('POST' == method){
            config.data = data;
        }else if('GET' == method){
            config.params = data;
        }
        $http(config).then(function(result){
            defered.resolve(result.data);
         }).catch(function(result){
            console.log(result);
            defered.reject(result.data.message);
         });
        return defered.promise;

    };
    
    webapp.directive('dropdown', [function() {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            scope: {
                value: '@'
            },
            templateUrl: '/web/demo/select',
            link: function($scope, $element, $attrs) {
                $scope.value = $scope.$parent.value;
                $scope.selectData = $scope.$parent.selectData;
                $scope.selectCurrent = $scope.$parent.selectCurrent;
                $scope.showDrow = false;
                $scope.selectVal = function(val) {
                    var obj = getDataByArr($scope.selectData);
                    $scope.selectCurrent.key = val;
                    $scope.selectCurrent.value = obj[val];
                };
                $scope.toggle = function() {
                    $scope.showDrow = !$scope.showDrow;
                }
    
                function getDataByArr(arr) {
                    var obj = {};
                    $scope.selectData.forEach(function(v, i) {
                        obj[v.key] = v.value;
                    })
    
                    return obj;
                }
            }
        };
    }]);

    return webapp;
};
