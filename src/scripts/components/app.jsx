/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var Reacticon = require('./reacticon');

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');

var ReacticonsApp = React.createClass({
  render: function() {
    return (
      <div>
        <Reacticon
          iconWidth="100"
          iconHeight="100"
          backgroundColor="#ccc"
          flapColor="#999" />
      </div>
    );
  }
});

React.renderComponent(<ReacticonsApp />, document.getElementById('content')); // jshint ignore:line

module.exports = ReacticonsApp;
