let { Link } = require('react-router');
let React = require('react');

let Nav = require('Nav');

let CampaignDetails = React.createClass({
  render: function() {
    return(
      <div>
        <Nav type="streamer"/>

        <div className="row container">
          <h3>Campaign Details</h3>
        </div>
      </div>
    )
  }
});

module.exports = CampaignDetails;
