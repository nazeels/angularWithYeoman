'use strict';

describe('Controller: IscrollCtrl', function () {

  // load the controller's module
  beforeEach(module('ngsmartcatalogApp'));

  var IscrollCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IscrollCtrl = $controller('IscrollCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
