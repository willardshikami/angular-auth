'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /signin when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/signin");
  });


  describe('signin', function() {

    beforeEach(function() {
      browser.get('index.html#!/signin');
    });


    it('should render view1 when user navigates to /signin', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for signin/);
    });

  });


  describe('signup', function() {

    beforeEach(function() {
      browser.get('index.html#!/signup');
    });


    it('should render signup when user navigates to /signup', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for signup/);
    });

  });
});
