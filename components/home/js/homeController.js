/**
 * Created by Tsafou on 07/07/2016.
 */
/**
 * Created by Tsafou on 04/06/2016.
 */
angular.module('fleaMarket').controller('homeController', homeController);

homeController.$inject = ['$scope', '$mdSidenav', '$state'];

function homeController($scope, $mdSidenav, $state) {
    var vm = this;

    vm.slides = [
        {
            id: 0,
            path: 'assets/img/fleaMarketTransparent.png',
            desc: 'Flea market'
        },
        {
            id: 1,
            path: 'assets/img/fleaMarketTransparent.png',
            desc: 'Thessaloniki'
        },
        {
            id: 2,
            path: 'assets/img/fleaMarketTransparent.png',
            desc: '3'
        }
    ];

    vm.active = 0;
    vm.interval = 5000;
    vm.noWrapSlides = false;

}