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
          width="100"
          height="100"
          type="document"
          label="doc" />
      </div>
    );
  }
});

React.renderComponent(<ReacticonsApp />, document.getElementById('content')); // jshint ignore:line

module.exports = ReacticonsApp;
