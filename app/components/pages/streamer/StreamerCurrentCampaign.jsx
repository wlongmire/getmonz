let { Link } = require('react-router');
let React = require('react');

let Nav = require('Nav');

let CurrentCampaign = React.createClass({
  render: function() {
    return(
      <div>
          <Nav type="streamer"/>
          <div className="row container">
            <h3>Current Campaign</h3>
          </div>
      </div>
    )
  }
});

module.exports = CurrentCampaign;
