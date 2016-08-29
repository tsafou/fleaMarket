/**
 * Created by Tsafou on 07/07/2016.
 */

angular.module('fleaMarket').controller('mainController', mainController);

mainController.$inject = ['$scope', '$rootScope', '$mdSidenav', '$state', '$timeout', '$document', '$mdMedia', '$mdDialog', '$http'];

function mainController($scope, $rootScope, $mdSidenav, $state, $timeout, $document, $mdMedia, $mdDialog, $http) {
    var vm = this;
    $scope.$mdMedia = $mdMedia;
    var originatorEv;
    var faq, terms;

    vm.menuItems = [
        // {
        //     "name": "Aρχικη",
        //     "state": "home"
        // },
        {
            "name": "Σχετικα με μας",
            "state": "about"
        },
        {
            "name": "Θελω να συμμετεχω",
            "state": "application"
        },
        {
            "name": "Πληροφοριες",
            "state": "info"
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

    
    $http({
        method: 'GET',
        url: 'components/var/terms.txt'
    }).then(function(res) {
        terms = res.data;
    });
    $http({
        method: 'GET',
        url: 'components/var/faq.txt'
    }).then(function(res) {
        faq = res.data;
    });

    vm.showTerms = function () {
            alert = $mdDialog.alert({
            title: 'Οροι Συμμετοχης',
            textContent: terms.text,
            ok: 'Κλεισιμο'
        });
        $mdDialog.show(alert);
    };

    vm.showFaq = function () {
            alert = $mdDialog.alert({
            title: 'Συχνες Ερωτησεις',
            // textContent: faq[0].question,
            htmlContent: '<div>Test</div>',
            ok: 'Κλεισιμο'
        });
        $mdDialog.show(alert);
    }

}