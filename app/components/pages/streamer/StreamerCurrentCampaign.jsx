let { Link } = require('react-router');
let React = require('react');

let CurrentCampaign = React.createClass({
  render: function() {
    return(
      <div className="row container">
        <main className="small-12 large-8 columns">

          {/* Brand Title */}
          <div className="row">
            <img src="http://lorempixel.com/100/100/abstract/"/>
            <h1>Razer</h1>
            <p>Man O War Wireless Headset Release</p>
          </div>

          {/* Campaign Description */}
          <section className="row">
            <h4>Campaign Description:</h4>
            <p>Aliquet non vestibulum consequat eros a lectus  tincidunt suspendisse orci parturient adipiscing erat quis fusce a habitasse a sem mus sed mus scelerisque suspendisse purus vehicula. </p>
          </section>

          {/* Length of Campaign */}
          <section className="row">
            <div className="small-12 large-6">
              <h4>Starts:</h4>
              <p> 10/2/2016 </p>
            </div>

            <div className="small-12 large-6">
              <h4>Length:</h4>
              <p> 3 months </p>
            </div>
          </section>


          {/* Campaign Toolkit */}
          <section className="row brand_title">
            <h4 className="title">Campaign Toolkit:</h4>
            <ul>
              <li><a href="#">Video</a></li>
              <li><a href="#">Profile Coupon</a></li>
              <li><a href="#">Billboard</a></li>
              <li><a href="#">Script</a></li>
            </ul>

          </section>

        </main>

        <aside className="small-12 large-4 columns">
          <section className="row">
            <h4>Campaign Stats:</h4>
            <h5>Days On Campaign</h5>
            <p>3 Days</p>

            <h5>Total Revenue %:</h5>
            <p>7%</p>

            <h5>Next Payout</h5>
            <p>In 3 Days</p>
          </section>

          <section className="row">
            <h4 className="title">Payout Stats:</h4>
            <h5>Total Payout Per Day:</h5>
            <p>400 monz</p>

            <h5>Clickthrough Payout:</h5>
            <p>400 monz</p>

            <h5>Revenue Payout</h5>
            <h4>1,200 monz</h4>
          </section>
        </aside>

      </div>
    )
  }
});

module.exports = CurrentCampaign;
