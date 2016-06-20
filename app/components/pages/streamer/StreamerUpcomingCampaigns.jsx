let { Link } = require('react-router');
let React = require('react');

let Nav = require('Nav');

let UpcomingCampaigns = React.createClass({
  render: function() {
    return(
      <div className="row container">
        <h3>Upcoming Campaigns</h3>
      </div>
    )
  }
});

module.exports = UpcomingCampaigns;
