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
require('../../styles/application.scss');
require('../../styles/reacticons.scss');

var ReacticonsApp = React.createClass({
  render: function() {
    return (
      <div>
        <Reacticon
          height="100"
          type="text"
          label="doc" />
        <Reacticon
          height="100"
          type="table"
          primaryColor="#2ECC40" />
        <Reacticon
          height="100"
          type="image"
          label="png" />
        <Reacticon
          height="100"
          type="code"
          label="html" />
        <Reacticon
          height="100"
          type="slides"
          label="ppt"
          primaryColor="#FF4136" />
      </div>
    );
  }
});

React.renderComponent(<ReacticonsApp />, document.getElementById('content')); // jshint ignore:line

module.exports = ReacticonsApp;
