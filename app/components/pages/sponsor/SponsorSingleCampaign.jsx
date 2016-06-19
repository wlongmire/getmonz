let { Link } = require('react-router');
let React = require('react');

let Nav = require('Nav');

let SingleCampaign = React.createClass({
  render: function() {
    return(
      <div>
        <Nav type="sponsor"/>

        <div className="row container">
          <h3>Single Campaign</h3>
        </div>

      </div>
    )
  }
});

module.exports = SingleCampaign;
