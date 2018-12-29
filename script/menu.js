var menu =  angular.module('menu',['ngAnimate']);
/**
 * 右侧菜单控制器
 */
menu.controller('IndexController',['$scope','$interval','$http',function ($scope,$interval,$http) {
    $scope.states1 =false;
    $scope.states2 =false;
    $scope.states3 =false;
    $scope.states4 =false;
    //一级菜单目录
    $scope.changeNav=function (nav) {
        if(nav=='1'){
            $scope.states1 = !$scope.states1;
            $scope.states2 = false;
            $scope.states3 = false;
        }else if(nav=='2'){
            $scope.states2 = !$scope.states2;
            $scope.states1 = false;
            $scope.states3 = false;
        }else if(nav=='3'){
            $scope.states3 = !$scope.states3;
            $scope.states2 = false;
            $scope.states1 = false;
        }
    }
    $scope.changeSubNav = function (subNav) {
        if(subNav=='1'){
            $scope.subState = '1';
        }else if(subNav=='2'){
            $scope.subState = '2';
        }else if(subNav=='3'){
            $scope.subState = '3';
        }else if(subNav=='4'){
            $scope.subState = '4';
        }else if(subNav=='5'){
            $scope.subState = '5';
        }else if(subNav=='6'){
            $scope.subState = '6';
        }else if(subNav=='7'){
            $scope.subState = '7';
        }else if(subNav=='8'){
            $scope.subState = '8';
        }else if(subNav=='9'){
            $scope.subState = '9';
        }else if(subNav=='10'){
            $scope.subState = '10';
        }
    }
}])
/**
 * 首页控制器
 */
menu.controller('MenuController',['$scope','$interval','$http',function ($scope,$interval,$http) {

}])
menu.controller('LightHouseController',['$scope','$interval','$http',function ($scope,$interval,$http) {

}])
