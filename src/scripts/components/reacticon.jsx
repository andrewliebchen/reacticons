/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var Reacticon = React.createClass({
  render: function() {
    var width = this.props.iconWidth || this.props.iconHeight * 0.75;
    var height = this.props.iconHeight || this.props.iconWidth * 1.33;
    var backgroundColor = this.props.backgroundColor || '#ccc';
    var flapColor = this.props.flapColor || '#999';

    return (
      <div>
        <svg version="1.1"
          width={width + 'px'}
          height={height + 'px'}
          viewBox="0 0 30 40">
          {this.renderGraphic(backgroundColor, flapColor)}
        </svg>
      </div>
    );
  },

  renderGraphic: function(backgroundColor, flapColor) {
    return (
      <g className="reacticon__file">
        <g className="reacticon__file__background">
          <path fill={backgroundColor} d="M28,40H2c-1.1,0-2-0.9-2-2V2c0-1.1,0.9-2,2-2h18l10,10v28C30,39.1,29.1,40,28,40z"/>
        </g>
        <g className="reacticon__file__flap">
          <path fill={flapColor} d="M30,10h-8c-1.1,0-2-0.9-2-2V0L30,10z"/>
        </g>
      </g>
    );
  }
});

module.exports = Reacticon;

