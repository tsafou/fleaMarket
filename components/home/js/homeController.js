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
            path: 'assets/img/books1.jpg',
            desc: 'ΦΑΓΗΤΟ',
            subDesc: 'Δοκιμάζουμε νέες γεύσεις και διεθνείς κουζίνες'
        },
        {
            id: 1,
            path: 'assets/img/shoes1.jpg',
            desc: 'ΔΡΑΣΤΗΡΙΟΤΗΤΕΣ',
            subDesc: 'Γνωρίζουμε πρόσφυγες, φιλοζωικές οργανώσεις, μουσικές κ.α.'
        },
        {
            id: 2,
            path: 'assets/img/flea1.jpg',
            desc: 'ΑΝΟΙΧΤΗ ΑΓΟΡΑ',
            subDesc: 'Αγοράζουμε δίσκους, ρούχα, υποδήματα κ.α.'
        }
    ];

    vm.active = 0;
    vm.interval = 5000;
    vm.noWrapSlides = false;

}