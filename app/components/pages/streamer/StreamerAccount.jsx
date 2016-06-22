let { Link } = require('react-router');
let React = require('react');

let StreamerAccount = React.createClass({
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
            <h4>Account Info:</h4>
            <img src="http://lorempixel.com/100/100/abstract/"/>
            <section className="row">
              <h5>Username:</h5>
              <p>wlongmire</p>
            </section>

            <section className="row">
              <h5>twitch handle:</h5>
              <p>wlongmire</p>
            </section>

            <section className="row">
              <h5>email:</h5>
              <p>warrenlongmire@gmail.com</p>
            </section>

            <section className="row">
              <h5>Stream Description:</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </section>

            <section className="row">
              <h5>Games:</h5>
              <div>
                <span className="label">Overwatch</span>
                <span className="label">Counterstrike</span>
                <span className="label">Hearthstone</span>
              </div>
            </section>

            <section className="row">
              <h5>Getting Monz Since:</h5>
              <div>
                <p>June 10, 2016</p>
              </div>
            </section>
          </aside>

      </div>
    )
  }
});

module.exports = StreamerAccount;
