let React = require('react');
let ReactDOM = require('react-dom');

let Nav = require('Nav');

let Main = React.createClass({
  render:function() {
    return(
      <div>
        <div>
          {this.props.children}
        </div>

      </div>
    );
  }
});

module.exports = Main;
