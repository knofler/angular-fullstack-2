'use strict';

describe('Directive: uiCustomer', function () {

  // load the directive's module and view
  beforeEach(module('angularFullstack2App'));
  beforeEach(module('app/directive/uidir/ui-customer/ui-customer.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ui-customer></ui-customer>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the uiCustomer directive');
  }));
});