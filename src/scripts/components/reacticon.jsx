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
// primaryColorDark

var Reacticon = React.createClass({
  getDefaultProps: function() {
    return {
      primaryColor:   "#0074D9",
      bgColor: "#ccc"
    };
  },

  render: function() {
    // Sizes
    var width    = this.props.width || this.props.height * 0.75;
    var height   = this.props.height || this.props.width * 1.33;
    var fontSize = height * 0.2;

    // Colors
    var primaryColorLight  = new Chromath(this.props.primaryColor).tint(0.8).toHexString();
    var primaryColorDark   = new Chromath(this.props.primaryColor).shade(0.2).toHexString();
    var bgColorDark = new Chromath(this.props.bgColor).shade(0.2).toHexString();

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
            primaryColorDark,
            this.props.bgColor,
            bgColorDark
          )}
        </svg>
        {this.props.label ? <span className="reacticon__label">{this.props.label}</span> : null}
      </div>
    );
  },

  renderGraphic: function(type, primaryColor, primaryColorLight, primaryColorDark, bgColor, bgColorDark) {
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
        {type === 'document' ?
          <g className="reacticon__type_document">
            <path fill={primaryColor} d="M23,15H7c-0.6,0-1-0.4-1-1v0c0-0.6,0.4-1,1-1h16c0.6,0,1,0.4,1,1v0C24,14.6,23.6,15,23,15z"/>
            <path fill={primaryColor} d="M23,19H7c-0.6,0-1-0.4-1-1v0c0-0.6,0.4-1,1-1h16c0.6,0,1,0.4,1,1v0C24,18.6,23.6,19,23,19z"/>
            <path fill={primaryColor} d="M23,23H7c-0.6,0-1-0.4-1-1v0c0-0.6,0.4-1,1-1h16c0.6,0,1,0.4,1,1v0C24,22.6,23.6,23,23,23z"/>
            <path fill={primaryColor} d="M17,27H7c-0.6,0-1-0.4-1-1v0c0-0.6,0.4-1,1-1h10c0.6,0,1,0.4,1,1v0C18,26.6,17.6,27,17,27z"/>
          </g>
        : null }
        {type === 'table' ?
          <g className="reacticon__type_table">
            <path fill={primaryColor} d="M23,14v12H7V14H23 M23,13H7c-0.6,0-1,0.4-1,1v12c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1V14C24,13.4,23.6,13,23,13L23,13z"/>
            <g>
              <rect fill={primaryColor} x="9" y="16" width="4" height="2"/>
              <rect fill={primaryColor} x="9" y="19" width="4" height="2"/>
              <rect fill={primaryColor} x="14" y="16" width="3" height="2"/>
              <rect fill={primaryColor} x="14" y="19" width="3" height="2"/>
              <rect fill={primaryColor} x="18" y="16" width="3" height="2"/>
              <rect fill={primaryColor} x="18" y="19" width="3" height="2"/>
              <rect fill={primaryColor} x="9" y="22" width="4" height="2"/>
              <rect fill={primaryColor} x="14" y="22" width="3" height="2"/>
              <rect fill={primaryColor} x="18" y="22" width="3" height="2"/>
            </g>
          </g>
        : null}
        {type === 'image' ?
          <g className="reacticon__type_image">
            <path fill={primaryColor} d="M23,14v12H7V14H23 M23,13H7c-0.6,0-1,0.4-1,1v12c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1V14C24,13.4,23.6,13,23,13L23,13z"/>
            <g>
              <path fill={primaryColorDark} d="M7,26h14l-6.5-6.5c-0.3-0.3-0.7-0.4-1-0.4s-0.8,0.1-1,0.4L7,25V26z"/>
              <path fill={primaryColor} d="M23,20l-1.7-1.7c-0.3-0.3-0.8-0.5-1.3-0.5s-0.9,0.2-1.3,0.5L11,26h12V20z"/>
              <path fill={primaryColorLight} d="M7,14v2.7C7.3,16.9,7.6,17,8,17c1.1,0,2-0.9,2-2c0-0.4-0.1-0.7-0.3-1H7z"/>
            </g>
          </g>
        : null}
        {type === 'zip' ?
          <g className="reacticon__type_zip">
            <polygon fill="#B3B3B3" points="20,0 15,18 15,18 10,0"/>
            <path fill={primaryColor} d="M14.4,15.4l0.3-1l1.9,0.5l-0.3,1L14.4,15.4z M14.9,13.5l0.3-1l1.9,0.5l-0.3,1L14.9,13.5z M15.5,11.5l0.3-1l1.9,0.5l-0.3,1
              L15.5,11.5z M16,9.6l0.3-1l1.9,0.5l-0.3,1L16,9.6z M16.6,7.7l0.3-1l1.9,0.5l-0.3,1L16.6,7.7z M17.1,5.7l0.3-1l1.9,0.5l-0.3,1
              L17.1,5.7z M17.6,3.8l0.3-1l1.9,0.5l-0.3,1L17.6,3.8z M18.2,1.9l0.3-1l1.9,0.5l-0.3,1L18.2,1.9z"/>
            <path fill={primaryColor} d="M13.2,16l1.9-0.5l0.3,1l-1.9,0.5L13.2,16z M12.6,14l1.9-0.5l0.3,1L12.9,15L12.6,14z M12.1,12.1l1.9-0.5l0.3,1l-1.9,0.5
              L12.1,12.1z M11.5,10.2l1.9-0.5l0.3,1l-1.9,0.5L11.5,10.2z M11,8.2l1.9-0.5l0.3,1l-1.9,0.5L11,8.2z M10.5,6.3l1.9-0.5l0.3,1
              l-1.9,0.5L10.5,6.3z M9.9,4.4l1.9-0.5l0.3,1l-1.9,0.5L9.9,4.4z M9.4,2.5l1.9-0.5l0.3,1L9.7,3.4L9.4,2.5z M8.9,0.5L10.8,0l0.3,1
              L9.1,1.5L8.9,0.5z"/>
            <path fill={primaryColor} d="M16,20h-2c-0.6,0-1-0.4-1-1v-1c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v1C17,19.6,16.6,20,16,20z"/>
            <path fill={primaryColor} d="M16,21h-2c-0.6,0-1,0.4-1,1v4c0,0.6,0.4,1,1,1h2c0.6,0,1-0.4,1-1v-4C17,21.4,16.6,21,16,21z M16,26h-2v-2h2V26z"/>
          </g>
        : null}
      </g>
    );
  }
});

module.exports = Reacticon;

