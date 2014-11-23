/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var Reacticon = React.createClass({
  getDefaultProps: function() {
    return {
      colorBackground: '#ccc',
      colorFlap: '#999'
    };
  },

  render: function() {
    var width = this.props.width || this.props.height * 0.75;
    var height = this.props.height || this.props.width * 1.33;

    return (
      <div>
        <svg version="1.1"
          width={width + 'px'}
          height={height + 'px'}
          viewBox="0 0 30 40">
          {this.renderGraphic(this.props.colorBackground, this.props.colorFlap)}
        </svg>
      </div>
    );
  },

  renderGraphic: function(colorBackground, colorFlap) {
    return (
      <g className="reacticon__file">
        <g className="reacticon__file__background">
          <path fill={colorBackground} d="M28,40H2c-1.1,0-2-0.9-2-2V2c0-1.1,0.9-2,2-2h18l10,10v28C30,39.1,29.1,40,28,40z"/>
        </g>
        <g className="reacticon__file__flap">
          <path fill={colorFlap} d="M30,10h-8c-1.1,0-2-0.9-2-2V0L30,10z"/>
        </g>
      </g>
    );
  }
});

module.exports = Reacticon;

