let { Link } = require('react-router');
let React = require('react');

let Nav = require('Nav');

let NewCampaign = React.createClass({
  render: function() {
    return(
      <div>
        <Nav type="sponsor"/>

        <div className="row container">
          <h3>New Campaign</h3>
        </div>
      </div>
    )
  }
});

module.exports = NewCampaign;
