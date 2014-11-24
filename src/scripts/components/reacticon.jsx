/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Chromath = require('chromath');

// NEED BETTER VARIABLE NAMES?
// bgColor
// secondaryColorLight
// secondaryColorDark
// primaryColor
// primaryColorLight
// primaryColorMid
// primaryColorDark

var Reacticon = React.createClass({
  getDefaultProps: function() {
    return {
      primaryColor: "#0074d9",
      bgColor:      "#fff"
    };
  },

  render: function() {
    // Sizes
    var width    = this.props.width || this.props.height * 0.75;
    var height   = this.props.height || this.props.width * 1.33;
    var fontSize = height * 0.19;

    // Colors
    var primaryColorLight  = new Chromath(this.props.primaryColor).tint(0.8).toHexString();
    var primaryColorMid    = new Chromath(this.props.primaryColor).tint(0.4).toHexString();
    var primaryColorDark   = new Chromath(this.props.primaryColor).shade(0.2).toHexString();
    var bgColorDark        = new Chromath(this.props.bgColor).shade(0.2).toHexString();

    var reacticonStyle = {
      fontSize: fontSize,
      color: bgColorDark
    }

    return (
      <div className="reacticon" style={reacticonStyle}>
        <svg version="1.1"
          width={width + 'px'}
          height={height + 'px'}
          viewBox="0 0 30 40">
          {this.renderGraphic(
            this.props.type,
            this.props.primaryColor,
            primaryColorLight,
            primaryColorMid,
            primaryColorDark,
            this.props.bgColor,
            bgColorDark
          )}
        </svg>
        {this.props.label ? <span className="reacticon__label">{this.props.label}</span> : null}
      </div>
    );
  },

  renderGraphic: function(type, primaryColor, primaryColorLight, primaryColorMid, primaryColorDark, bgColor, bgColorDark) {
    return (
      <g>
        <g className="reacticon__file">
          <g className="reacticon__file__background">
            <path fill={bgColor} d="M28,40H2c-1.1,0-2-0.9-2-2V2c0-1.1,0.9-2,2-2h18l10,10v28C30,39.1,29.1,40,28,40z"/>
          </g>
          <g className="reacticon__file__flap">
            <path fill={bgColorDark} d="M30,10h-8c-1.1,0-2-0.9-2-2V0L30,10z"/>
          </g>
        </g>
        {type === 'text' ?
          <g className="reacticon__type_text">
            <g>
              <path fill={primaryColor} d="M23.5,13h-10c-0.3,0-0.5,0.2-0.5,0.5v1c0,0.3,0.2,0.5,0.5,0.5h10c0.3,0,0.5-0.2,0.5-0.5v-1C24,13.2,23.8,13,23.5,13z"/>
              <path fill={primaryColor} d="M23.5,17h-10c-0.3,0-0.5,0.2-0.5,0.5v1c0,0.3,0.2,0.5,0.5,0.5h10c0.3,0,0.5-0.2,0.5-0.5v-1C24,17.2,23.8,17,23.5,17z"/>
              <path fill={primaryColor} d="M16.5,25h-10C6.2,25,6,25.2,6,25.5v1C6,26.8,6.2,27,6.5,27h10c0.3,0,0.5-0.2,0.5-0.5v-1C17,25.2,16.8,25,16.5,25z"/>
              <path fill={primaryColor} d="M23.5,21h-17C6.2,21,6,21.2,6,21.5v1C6,22.8,6.2,23,6.5,23h17c0.3,0,0.5-0.2,0.5-0.5v-1C24,21.2,23.8,21,23.5,21z"/>
            </g>
            <g>
              <path fill={primaryColorLight} d="M7,19h4c0.6,0,1-0.4,1-1v-4c0-0.6-0.4-1-1-1H7c-0.6,0-1,0.4-1,1v4C6,18.6,6.4,19,7,19z"/>
              <path fill={primaryColorMid} d="M6.5,18.9l2.2-2.2L8.1,16c-0.1-0.1-0.3-0.2-0.5-0.2c-0.2,0-0.4,0.1-0.5,0.2L6,17.1V18C6,18.4,6.2,18.7,6.5,18.9z"/>
              <path fill={primaryColor} d="M11.2,15.4c-0.2-0.2-0.4-0.2-0.6-0.2s-0.4,0.1-0.6,0.2l-3.5,3.5C6.7,18.9,6.8,19,7,19h4c0,0,0,0,0.1,0c0.5,0,0.9-0.5,0.9-1v-1.8L11.2,15.4z"/>
              <path fill={primaryColorMid} d="M6.5,14.5c0.6,0,1-0.4,1-1c0-0.2-0.1-0.4-0.1-0.5H7c-0.5,0-1,0.4-1,1v0.4C6.1,14.4,6.3,14.5,6.5,14.5z"/>
            </g>
          </g>
        : null }
        {type === 'table' ?
          <g className="reacticon__type_table">
            <path fill={primaryColorDark} d="M24,15v-1c0-0.6-0.4-1-1-1H7c-0.6,0-1,0.4-1,1v1H24z"/>
            <rect fill={primaryColorLight} x="6" y="15" width="18" height="2"/>
            <rect fill={primaryColorMid} x="6" y="17" width="18" height="2"/>
            <rect fill={primaryColorLight} x="6" y="19" width="18" height="2"/>
            <rect fill={primaryColorMid} x="6" y="21" width="18" height="2"/>
            <rect fill={primaryColorLight} x="6" y="23" width="18" height="2"/>
            <path fill={primaryColorMid} d="M23,27H7c-0.6,0-1-0.4-1-1v-1h18v1C24,26.6,23.6,27,23,27z"/>
          </g>
        : null}
        {type === 'image' ?
          <g className="reacticon__type_image">
            <path fill={primaryColorLight} d="M23,13H7c-0.6,0-1,0.4-1,1v12c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1V14C24,13.4,23.6,13,23,13L23,13z"/>
            <path fill={primaryColorDark} d="M7.1,27l15.3,0l-7.5-7.5c-0.3-0.3-0.8-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L6,25.9V26C6,26.6,6.5,27,7.1,27z"/>
            <path fill={primaryColor} d="M24,19l-1.1-1c-0.4-0.4-1-0.6-1.5-0.6c-0.5,0-1.1,0.2-1.5,0.6l-9.1,9H23c0.6,0,1-0.4,1-1V19z"/>
            <path fill={primaryColorMid} d="M7,13c-0.6,0-1,0.4-1,1v2.2c0.3,0.2,0.7,0.3,1.2,0.3c1.3,0,2.3-1,2.3-2.3c0-0.4-0.1-0.8-0.3-1.2H7z"/>
          </g>
        : null}
        {type === 'code' ?
          <g className="reacticon__type_code">
            <path fill={primaryColorDark} d="M9,26V14v-1H7c-0.6,0-1,0.4-1,1v12c0,0.6,0.4,1,1,1h2V26z"/>
            <g>
              <path fill={primaryColorLight} d="M24,15H9v-2h14c0.6,0,1,0.4,1,1V15z"/>
              <rect fill={primaryColorMid} x="9" y="15" width="15" height="2"/>
              <rect fill={primaryColorLight} x="9" y="17" width="15" height="2"/>
              <rect fill={primaryColorMid} x="9" y="19" width="15" height="2"/>
              <rect fill={primaryColorLight} x="9" y="21" width="15" height="2"/>
              <rect fill={primaryColorMid} x="9" y="23" width="15" height="2"/>
              <path fill={primaryColorLight} d="M23,27H9v-2h15v1C24,26.6,23.6,27,23,27z"/>
            </g>
            <g>
              <path fill={bgColor} d="M8.1,15.9v0.3H7v-0.3h0.4V15H7v-0.2c0.2,0,0.3-0.1,0.4-0.1h0.3v1.3H8.1z"/>
              <path fill={bgColor} d="M6.9,19c0.5-0.4,0.8-0.7,0.8-0.9c0-0.2-0.1-0.2-0.3-0.2c-0.1,0-0.2,0.1-0.3,0.2l-0.2-0.2c0.2-0.2,0.3-0.3,0.6-0.3c0.3,0,0.6,0.2,0.6,0.5c0,0.3-0.3,0.6-0.6,0.8c0.1,0,0.2,0,0.3,0h0.4v0.3H6.9V19z"/>
              <path fill={bgColor} d="M7,21.8C7.1,21.9,7.3,22,7.4,22c0.2,0,0.3-0.1,0.3-0.2c0-0.1-0.1-0.2-0.5-0.2v-0.3c0.3,0,0.4-0.1,0.4-0.2c0-0.1-0.1-0.2-0.2-0.2c-0.1,0-0.2,0.1-0.3,0.1l-0.2-0.2c0.2-0.1,0.3-0.2,0.5-0.2c0.3,0,0.6,0.2,0.6,0.4c0,0.2-0.1,0.3-0.3,0.4v0c0.2,0.1,0.4,0.2,0.4,0.4c0,0.3-0.3,0.5-0.6,0.5c-0.3,0-0.5-0.1-0.6-0.2L7,21.8z"/>
              <path fill={bgColor} d="M8.1,24.9H7.9v0.4H7.6v-0.4H6.8v-0.3l0.7-1h0.4v0.9h0.2V24.9z M7.6,24.6v-0.3c0-0.1,0-0.2,0-0.3h0c-0.1,0.1-0.1,0.2-0.2,0.3l-0.2,0.3H7.6z"/>
            </g>
          </g>
        : null}
        {type === 'slides' ?
          <g className="reacticon__type_slides">
            <path fill={primaryColorDark} d="M23,13H7c-0.6,0-1,0.4-1,1v12c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1V14C24,13.4,23.6,13,23,13L23,13z"/>
            <g>
              <path fill={primaryColorMid} d="M14.9,16.1c-2.5,0-4.4,2-4.4,4.4c0,2.5,2,4.4,4.4,4.4s4.4-2,4.4-4.4h-4.4V16.1z"/>
              <path fill={primaryColorLight} d="M16.1,15v4.4h4.4C20.5,17,18.5,15,16.1,15z"/>
            </g>
          </g>
        : null}
      </g>
    );
  }
});

module.exports = Reacticon;

