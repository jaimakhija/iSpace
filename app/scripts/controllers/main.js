'use strict';

/**
 * @ngdoc function
 * @name iSpaceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the iSpaceApp
 */
angular.module('iSpaceApp')
  .controller('MainCtrl', function ($scope) {
    $scope.mystatus = [
      'Item 1',
      'Item 2',
      'Item 3'
    ];

    $scope.addStatus = function() {
    	$scope.mystatus.push($scope.newstatus);
    	$scope.newstatus = '';
    };

    $scope.removeStatus = function (index){
    	$scope.mystatus.splice(index, 1);
    }
  });
