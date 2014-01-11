'use strict';

angular.module('ngsmartcatalogApp')
  .controller('CategoryctrlCtrl', function ($scope) {
  	$scope.categories = ['Dining','Kitchen','Sanitary','Fancy'];
   $scope.clickCategory = function(){
		var cl = document.body.classList;
		    if (cl.contains('left-nav')) {
		        cl.remove('left-nav');
		    } else {
		        cl.add('left-nav');
		    }
   };
  });
