/**
 * Created by Tsafou on 07/07/2016.
 */
angular.module('fleaMarket').controller('aboutController', aboutController);

aboutController.$inject = ['$scope', '$mdSidenav', '$state'];

function aboutController($scope, $mdSidenav, $state) {
    var vm = this;

    vm.logosDimosUrl = ['http://www.thessaloniki.gr/'];
    vm.logosMediaUrl = ['https://www.facebook.com/SoulfoodThessaloniki/', 'http://www.athensvoice.gr/','http://beater.gr/','https://www.mixcloud.com/blackradioberlin/','http://www.kasetophono.com/','http://www.livemedia.gr/','http://www.manstaradio.gr/','http://popaganda.gr/','http://publishitmagazine.gr/'];
    vm.logosSocialUrl = ['http://www.partyrentals.gr/','http://www.bdl.gr/','https://www.facebook.com/CocktailBarSKG/','http://www.meerarchitekten.com/','https://www.facebook.com/LaDozeBar/'];
    vm.logosSupportersUrl = ['http://fairtrade.gr/','https://www.facebook.com/hobostore/','https://www.facebook.com/%CE%A0%CE%9D%CE%9F%CE%97-%CE%95%CE%9B%CE%A0%CE%99%CE%94%CE%91%CE%A3-1674902772737064/','http://www.praksis.gr/el/','http://www.galileogalilei.gr/'];
    vm.logosStreetFoodUrl = ['http://www.brothersinlaw.gr/','https://foursquare.com/v/high-school-pizza-bar/5479bfd0498e8569fb42bec2','https://www.facebook.com/joinjuicebars/','http://www.holamexicana.gr/'];

}
