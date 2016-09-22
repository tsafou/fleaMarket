/**
 * Created by Tsafou on 07/07/2016.
 */

angular.module('fleaMarket').controller('contactController', contactController);

contactController.$inject = ['$scope', '$mdSidenav', '$state', '$timeout'];

function contactController($scope, $mdSidenav, $state, $timeout) {
    var vm = this;

    vm.showSuccess = false;

    $scope.person = {};

    vm.sendEmail = function () {
        if ($scope.contactForm.$valid) {
            $timeout(function() {
                $scope.person = {};
                $scope.contactForm.$setPristine();
                $scope.contactForm.$setUntouched();
                vm.showSuccess = true;
            }, 1500);
            $timeout(function () {
                vm.showSuccess = false;
            }, 5500);
        }

    }

}