'use strict';

describe('Main', function () {
  var ReacticonsApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    ReacticonsApp = require('../../../src/scripts/components/ReacticonsApp.jsx');
    component = ReacticonsApp();
  });

  it('should create a new instance of ReacticonsApp', function () {
    expect(component).toBeDefined();
  });
});
