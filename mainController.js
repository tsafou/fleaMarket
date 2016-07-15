/**
 * Created by Tsafou on 07/07/2016.
 */
/**
 * Created by Tsafou on 04/06/2016.
 */
angular.module('fleaMarket').controller('mainController', mainController);

mainController.$inject = ['$scope', '$rootScope', '$mdSidenav', '$state', '$timeout', '$document'];

function mainController($scope, $rootScope, $mdSidenav, $state, $timeout, $document) {
    var vm = this;

    var originatorEv;
    

    vm.menuItems = [
        {
            "name": "Aρχικη",
            "state": "home"
        },
        {
            "name": "Πληροφοριες",
            "state": "info"
        },
        {
            "name": "Σχετικα με μας",
            "state": "about"
        },
        {
            "name": "Επικοινωνια",
            "state": "contact"
        }
    ];

    vm.openSidebar = function () {
        vm.sidenavIsOpen = true;
        $mdSidenav('left').open();

    };
    vm.closeSidebar = function () {
        vm.sidenavIsOpen = false;
        $mdSidenav('left').close();
    };

    vm.goToState = function (state) {
        $state.go(state);
    };

    vm.openMenu = function ($mdOpenMenu, ev) {
        originatorEv = ev;
        $mdOpenMenu(ev);
    };

}