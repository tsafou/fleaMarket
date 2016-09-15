/**
 * Created by Tsafou on 07/07/2016.
 */
angular.module('fleaMarket').controller('aboutController', aboutController);

aboutController.$inject = ['$scope', '$mdSidenav', '$state'];

function aboutController($scope, $mdSidenav, $state) {
    var vm = this;

    vm.logosMediaUrl = ['http://www.tsafaris.com','http://www.sport24.gr','','','','','','',''];
    vm.logosSupportersUrl = ['http://www.tsafaris.com','http://www.tsafaris.com','http://www.tsafaris.com','http://www.tsafaris.com','http://www.tsafaris.com'];
    vm.logosSocialUrl = ['http://www.tsafaris.com','http://www.tsafaris.com','http://www.tsafaris.com','http://www.tsafaris.com','http://www.tsafaris.com','http://www.tsafaris.com','http://www.tsafaris.com'];
    vm.logosStreetFoodUrl = ['http://www.tsafaris.com','http://www.tsafaris.com','http://www.tsafaris.com','http://www.tsafaris.com'];

}