'use strict';

/**
 * @ngdoc function
 * @name iSpaceApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the iSpaceApp
 */
angular.module('iSpaceApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
