/**
 * Created by Tsafou on 07/07/2016.
 */

angular.module('fleaMarket')
    .directive('updateFilling', updateFilling)
    .controller('infoController', infoController);

function updateFilling () {
    return {
        restrict: 'A',
        link: function(scope, element, attrs, controller) {
            element.bind('click', function(e) {
                // var thisElem = angular.element(e.target)[0];
                var filling = document.getElementById('filling');
                updateFilling(element[0], filling, element[0].offsetParent.offsetWidth);
            });

            function updateFilling(element, filling, totWidth) {
                //change .filling-line length according to the selected event
                var style = window.getComputedStyle(element, null);
                var eventLeft = style.getPropertyValue("left");
                var eventWidth = style.getPropertyValue("width");
                eventLeft = Number(eventLeft.replace('px', '')) + Number(eventWidth.replace('px', ''))/2;
                var scaleValue = eventLeft/totWidth;
                setTransformValue(filling, 'scaleX', scaleValue);
            }
            function setTransformValue(element, property, value) {
                element.style["-webkit-transform"] = property+"("+value+")";
                element.style["-moz-transform"] = property+"("+value+")";
                element.style["-ms-transform"] = property+"("+value+")";
                element.style["-o-transform"] = property+"("+value+")";
                element.style["transform"] = property+"("+value+")";
            }
console.log(element[0].parentElement.parentElement.children(':first'));
        }
    }
}


infoController.$inject = ['$scope', '$mdSidenav', '$state'];

function infoController($scope, $mdSidenav, $state) {
    var vm = this;

    $scope.selected = [];

    $scope.query = {
        order: 'name',
        limit: 5,
        page: 1
    };

    vm.selectedEvent = 0;

    vm.goTo = function (index) {
        updateFilling();
        vm.selectedEvent = index;
    };

    vm.events = [
        {
            name: 'Start',
            date: '01/09/2016',
            desc: 'First event - opening',
            left: '100px'
        },
        {
            name: 'Blah',
            date: '02/09/2016',
            desc: 'Something else',
            left: '200px'
        },
        {
            name: 'Mid',
            date: '03/09/2016',
            desc: 'Good',
            left: '300px'
        },
        {
            name: 'End',
            date: '04/09/2016',
            desc: 'End of fleamarket - music',
            left: '400px'
        }
    ];

    // function updateFilling(selectedEvent, filling, totWidth) {
    //     //change .filling-line length according to the selected event
    //     // var eventStyle = window.getComputedStyle(selectedEvent.get(0), null),
    //     //     eventLeft = eventStyle.getPropertyValue("left"),
    //     //     eventWidth = eventStyle.getPropertyValue("width");
    //     // eventLeft = Number(eventLeft.replace('px', '')) + Number(eventWidth.replace('px', ''))/2;
    //     // var scaleValue = eventLeft/totWidth;
    //     // setTransformValue(filling.get(0), 'scaleX', scaleValue);
    //     var random = Math.random() * (1 - 0) + 0;
    //     setTransformValue(filling.get(0), 'scaleX', random);
    // }
    // function setTransformValue(element, property, value) {
    //     element.style["-webkit-transform"] = property+"("+value+")";
    //     element.style["-moz-transform"] = property+"("+value+")";
    //     element.style["-ms-transform"] = property+"("+value+")";
    //     element.style["-o-transform"] = property+"("+value+")";
    //     element.style["transform"] = property+"("+value+")";
    // }

    vm.merchants = [
        {
            zone   : 'Ζώνη 1',
            big    : 10000,
            medium : 9000,
            small  : 8000
        },
        {
            zone   : 'Ζώνη 2',
            big    : 9000,
            medium : 8000,
            small  : 7000
        },
        {
            zone   : 'Ζώνη 3',
            big    : 8000,
            medium : 7000,
            small  : 6000
        },

    ];
    vm.gallery = [
        {
            id: 0,
            title: 'klmk;m',
            path: 'assets/img/clothes.jpg'
        },
        {
            id: 0,
            title: 'kmlkmn',
            path: 'assets/img/records.jpg'
        },
        {
            id: 0,
            title: 'rddf',
            path: 'assets/img/milos1.jpg'
        },
        {
            id: 0,
            title: 'jhfdg',
            path: 'assets/img/milos2.jpg'
        },
    ];
}