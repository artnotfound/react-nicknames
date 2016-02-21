var React = require('react');

function newNick (nickname) {
  return React.createClass({
    displayName: nickname,

    getDefaultProps () {
      return {
        'el': 'div'
      };
    },

    propTypes: {
      'el': React.PropTypes.string
    },

    render () {
      return React.createElement(this.props.el, this.props);
    }
  });
}

module.exports = newNick;

