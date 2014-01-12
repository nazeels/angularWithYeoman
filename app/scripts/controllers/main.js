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

   $scope.onclick = function ($event) {
   	var current = angular.element($event.srcElement);
   	var showMore = 'Show More';
   	var hideDetails = 'Hide Details';
	var parent =angular.element($event.srcElement.parentNode);
   	if(current.val()=== showMore)
   	{
	   	current.val(hideDetails);
	   	parent.append('<div class="details">More details about the products shall be here...</div>');
   }
   else{
   		current.val(showMore);
   		console.log(parent.find('[class=details]').remove());
	   	// parent.append('<div>More details about the products shall be here...</div>');
   }


   };



  });

