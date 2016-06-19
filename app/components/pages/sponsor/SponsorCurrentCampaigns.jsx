let React = require('react');

let Nav = require('Nav');

let CurrentCampaigns = React.createClass({
  render: function() {
    return(
      <div>
          <Nav type="sponsor"/>

          <div className="row container">
              <h3>Current Campaigns</h3>
          </div>
      </div>
    )
  }
});

module.exports = CurrentCampaigns;
