/**
 * Created by Tsafou on 07/07/2016.
 */

angular.module('fleaMarket')
    .directive('updateFilling', updateFilling)
    .controller('infoController', infoController);

updateFilling.$inject = ['$timeout'];

function updateFilling($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs, controller) {
            if (scope.$index == 0) {
                $timeout(function () {
                    var filling = document.getElementById('filling');
                    updateFilling(element[0], filling, element[0].offsetParent.offsetWidth);
                });

            }

            element.bind('click', function (e) {
                // var thisElem = angular.element(e.target)[0];
                var filling = document.getElementById('filling');
                updateFilling(element[0], filling, element[0].offsetParent.offsetWidth);
            });

            function updateFilling(element, filling, totWidth) {
                //change .filling-line length according to the selected event
                var style = window.getComputedStyle(element, null);
                var eventLeft = style.getPropertyValue("left");
                var eventWidth = style.getPropertyValue("width");
                eventLeft = Number(eventLeft.replace('px', '')) + Number(eventWidth.replace('px', '')) / 2;
                var scaleValue = eventLeft / totWidth;
                // console.log(eventLeft);
                setTransformValue(filling, 'scaleX', scaleValue);
            }

            function setTransformValue(element, property, value) {
                element.style["-webkit-transform"] = property + "(" + value + ")";
                element.style["-moz-transform"] = property + "(" + value + ")";
                element.style["-ms-transform"] = property + "(" + value + ")";
                element.style["-o-transform"] = property + "(" + value + ")";
                element.style["transform"] = property + "(" + value + ")";
            }

        }
    }
}


infoController.$inject = ['$scope', '$mdSidenav', '$state', '$mdMedia', 'Lightbox'];

function infoController($scope, $mdSidenav, $state, $mdMedia, Lightbox) {
    var vm = this;
    $scope.selected = [];

    $scope.query = {
        order: 'name',
        limit: 5,
        page: 1
    };

    vm.selectedEvent = 0;

    vm.goTo = function (index) {
        // updateFilling();
        vm.selectedEvent = index;
    };

    vm.events = [
        {
            name: 'Start',
            date: '01/09/2016',
            desc: 'First event - opening',
            img: 'assets/img/clothes.jpg',
            left: '20%'

        },
        {
            name: 'Blah',
            date: '02/09/2016',
            desc: 'Something else',
            img: 'assets/img/records.jpg',
            left: '40%'

        },
        {
            name: 'Mid',
            date: '03/09/2016',
            desc: 'Good',
            img: 'assets/img/milos1.jpg',
            left: '60%'

        },
        {
            name: 'End',
            date: '04/09/2016',
            desc: 'End of fleamarket - music',
            img: 'assets/img/records.jpg',
            left: '80%'

        }
    ];

    vm.merchants = [
        {
            zone: 'Κανονικός Πάγκος',
            dimensions: '1.25x60',
            price: 90
        },
        {
            zone: 'Προνομιακός Πάγκος',
            dimensions: '1.80x76',
            price: 130
        },
        {
            zone: '2 Κανονικοί Πάγκοι Ενωμένοι',
            dimensions: '2.50x60',
            price: 180
        }
    ];

    vm.gallery = [
        {
            title: 'klmk;m',
            url: 'assets/img/gallery/1.jpg'
        },
        {
            title: 'kmlkmn',
            url: 'assets/img/gallery/2.jpg'
        },
        {
            title: 'rddf',
            url: 'assets/img/gallery/3.jpg'
        },
        {
            title: 'jhfdg',
            url: 'assets/img/gallery/4.jpeg'
        },
        {
            title: 'kmlkmn',
            url: 'assets/img/gallery/5.jpeg'
        },
        {
            title: 'kmlkmn',
            url: 'assets/img/gallery/6.jpg'
        },
        {
            title: 'kmlkmn',
            url: 'assets/img/gallery/7.jpg'
        },
        {
            title: 'kmlkmn',
            url: 'assets/img/gallery/8.jpg'
        },
        {
            title: 'kmlkmn',
            url: 'assets/img/gallery/9.jpg'
        },
        {
            title: 'kmlkmn',
            url: 'assets/img/gallery/10.jpg'
        },
        {
            title: 'kmlkmn',
            url: 'assets/img/gallery/11.jpg'
        }
    ];


    vm.activeImageUrl = vm.gallery[0].url;
    vm.setActiveImage = function (index) {
        vm.activeImageUrl = vm.gallery[index].url;
    };

    $scope.openLightboxModal = function (index) {
        Lightbox.openModal(vm.gallery, index);
    };
}
