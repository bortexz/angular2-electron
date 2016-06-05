describe('About', function () {

  beforeEach(function() {
      element(by.css('my-app header nav a:last-child')).click();
  });

  it('should have <my-about>', function () {
    var home = element(by.css('my-app my-about'));
    expect(home.isPresent()).toEqual(true);
    expect(home.getText()).toEqual("About Works!");
  });

});
