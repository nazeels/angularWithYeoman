'use strict';

angular.module('ngsmartcatalogApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'test',
      'sdfasdf',
      'Karma'
    ];
    $scope.products = [{name:'Dinning Table',url:'http://www.ikea.com/ms/en_AE/img/campaigns/low-price/jokkmokk-table_UAE.JPG',descp:'description'},
    					{name:'KUSINER',url:'http://www.ikea.com/ms/en_AE/img/campaigns/low-price/kusiner-box_.JPG',descp:'description'},
    					{name:'RACK',url:'http://www.ikea.com/ms/en_AE/img/campaigns/low-price/raskog-trolley.JPG',descp:'description'}];

   $scope.onclick = function () {
   	// body...
   	alert('slide down with details');
   };
   $scope.clickCategory = function(){
   	alert('category');
		// var cl = document.body.classList;
		//     if (cl.contains('left-nav')) {
		//         cl.remove('left-nav');
		//     } else {
		//         cl.add('left-nav');
		//     }
   };
  });

