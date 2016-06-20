let React = require('react');
let ReactDOM = require('react-dom');

let Nav = require('Nav');

let Main = React.createClass({
  render:function() {
    return(
      <div className="medium-6 large-4 small-centered columns">
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main;
