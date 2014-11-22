/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var IconBackground = require('./icon_background');

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');

var ReacticonsApp = React.createClass({
  render: function() {
    return (
      <div>
        <IconBackground />
      </div>
    );
  }
});

React.renderComponent(<ReacticonsApp />, document.getElementById('content')); // jshint ignore:line

module.exports = ReacticonsApp;
