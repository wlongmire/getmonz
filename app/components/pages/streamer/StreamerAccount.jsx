let { Link } = require('react-router');
let React = require('react');

let Nav = require('Nav');

let StreamerAccount = React.createClass({
  render: function() {
    return(
      <div>
        <div className="row container">
          <h3>Streamer Account</h3>
        </div>
      </div>
    )
  }
});

module.exports = StreamerAccount;
