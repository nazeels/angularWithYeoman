'use strict';
var tmp;
angular.module('ngsmartcatalogApp')
  .controller('IscrollCtrl', function ($scope) {

var myScroll;
    $scope.init = function(){

//call after the page is loaded
  angular.element(document).ready(function () {
     myScroll = new IScroll('#wrapper', { mouseWheel: true });
    
      // angular.element(document).addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
  });


    };

    $scope.products = [{name:'Dinning Table',url:'http://www.ikea.com/ms/en_AE/img/campaigns/low-price/jokkmokk-table_UAE.JPG',descp:'description'},
    								{name:'KUSINER',url:'http://www.ikea.com/ms/en_AE/img/campaigns/low-price/kusiner-box_.JPG',descp:'description'},
    					{name:'KUSINER',url:'http://www.ikea.com/ms/en_AE/img/campaigns/low-price/kusiner-box_.JPG',descp:'description'},
    					{name:'KUSINER',url:'http://www.ikea.com/ms/en_AE/img/campaigns/low-price/kusiner-box_.JPG',descp:'description'},
    					{name:'RACK',url:'http://www.ikea.com/ms/en_AE/img/campaigns/low-price/raskog-trolley.JPG',descp:'description'}];

   $scope.onclick = function ($event) {
   	var current = angular.element($event.currentTarget);
   	var showMore = 'Show More';
   	var hideDetails = 'Hide Details';
	var parent =angular.element($event.currentTarget.parentElement.parentElement);
   	if(current.val() === showMore)
   	{
      var details;
	   	current.val(hideDetails);
	   	parent.append('<div class="details animated" style="background-color:green;">More details about the products shall be here...</div>');
      details = parent.children('.details');
      tmp = details;
      details.addClass("flipInX");
   }
   else{
    //remove details 
   		current.val(showMore);
      var itmRem = parent.children('.details');
      itmRem.removeClass('flipInX');
      tmp = itmRem;
      
      setTimeout(function(){itmRem.remove();}, 600 );
      itmRem.addClass("fadeOutRight");
   }
   //refresh the iScroll
   myScroll.refresh();

   };
  });
