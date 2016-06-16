let { Link } = require('react-router');
let React = require('react');

let Home = React.createClass({
  render: function() {
    return(
      <div>
          <h3>Home</h3>

          <Link to="/signup" className="button"> Signup </Link><br/>

          <Link to="/streamer/wlongmire" className="button"> Streamer Signin </Link>
          <Link to="/sponsor/razor" className="button"> Sponsor Signin </Link>
      </div>
    )
  }
});

module.exports = Home;
