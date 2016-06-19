let { Link } = require('react-router');
let React = require('react');

let Nav = require('Nav');

let CampaignHistory = React.createClass({
  render: function() {
    return(
      <div>
        <Nav type="streamer"/>

        <div className="row container">
          <h3>Campaign History</h3>
        </div>
      </div>
    )
  }
});

module.exports = CampaignHistory;
