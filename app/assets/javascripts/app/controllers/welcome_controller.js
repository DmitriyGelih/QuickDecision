'use strict';

angular.module('quickDecision.controllers', []).
    controller('welcomeController', function ($scope) {

        $scope.foo = function(item) {
          console.log(item)
        };

        $scope.items = [{ name: 'Покупка авто' }];
    });