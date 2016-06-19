let { Link } = require('react-router');
let React = require('react');

let Nav = require('Nav');

let SponserAccount = React.createClass({
  render: function() {
    return(
      <div>
        <Nav type="sponsor"/>

        <div className="row container">
          <h3>Sponsor Account</h3>
        </div>
      </div>
    )
  }
});

module.exports = SponserAccount;
