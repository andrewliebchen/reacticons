/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var CSSTransitionGroup = React.addons.CSSTransitionGroup;

var Reacticon = require('./reacticon');

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/normalize.css');
require('../../styles/application.scss');
require('../../styles/reacticons.scss');

var ReacticonsApp = React.createClass({
  getInitialState: function() {
      return { showAnimateFlap: false };
  },
  onClick: function() {
      this.setState({ showAnimateFlap: true });
  },
  render: function() {
    return (
      <div>
        <CSSTransitionGroup transitionName="reacticon">
          <Reacticon
            key="1"
            height="100"
            type="text"
            label="doc"
            progress="50%"
            animate />
          <Reacticon
            key="2"
            height="100"
            type="table"
            primaryColor="#2ECC40"
            isProcessing
            animate />
          <Reacticon
            key="3"
            height="100"
            type="image"
            label="png"
            animate />
          <Reacticon
            key="4"
            height="100"
            type="code"
            label="html"
            animate />
          <Reacticon
            key="5"
            height="100"
            type="slides"
            label="ppt"
            primaryColor="#FF4136"
            animate />
        </CSSTransitionGroup>
        <div>
          <button onClick={this.onClick}>Animate corner flap</button>
        </div>
      </div>
    );
  }
});

React.renderComponent(<ReacticonsApp />, document.getElementById('content')); // jshint ignore:line

module.exports = ReacticonsApp;
