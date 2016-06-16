let { Link } = require('react-router');
let React = require('react');

let Signup = React.createClass({
  render: function() {
    return(
      <div>
          <h3>Signup</h3>

          <Link to="/" className="button"> Signup Complete </Link>
      </div>
    )
  }
});

module.exports = Signup;
