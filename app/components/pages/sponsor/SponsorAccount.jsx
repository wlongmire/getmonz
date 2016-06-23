let React = require('react');
let { Chart } = require('react-d3-core');
let { LineChart } = require('react-d3-basic');

let SponsorAccount = React.createClass({
  render: function() {
    let chartData = [
      {"monz":0, "index":0},
      {"monz":12, "index":1},
      {"monz":500,"index":2},
      {"monz":300,"index":3}
    ];

    var chartSeries = [
      {
        field: 'monz',
        name: 'MONZ',
        color: '#ff7f0e',
        style: {
          "stroke-width": 2,
          "stroke-opacity": .2,
          "fill-opacity": .2
        }
      }
    ],
    x = function(d) {
      return d.index;
    }

    return(
        <div className="row container">

          <main className="small-12 large-8 columns">

            {/* Overall Revenue */}
            <section className="row">
              <h4>Overall  Revenue:</h4>

                <LineChart
                  width= {700}
                  height= {300}
                  data= {chartData}
                  chartSeries= {chartSeries}
                  x= {x}
                />

            </section>


            {/* Your MONZ */}
            <section className="row">
              <h4>Your MONZ:</h4>
              <div className="small-6 large-6 columns">
                <h5>Overall Revenue:</h5>
                <p> 31,203 monz </p>
              </div>

              <div className="small-6 large-6 columns">
                <h5>Current Exchange:</h5>
                <p> $0.50 per monz </p>
              </div>

            </section>

            {/* Campaign Overview */}
            <section className="row">
              <h4>Campaign Overview:</h4>
              <div className="row">
                <div className="small-6 large-3 columns">
                  <h5>Total Campaigns:</h5>
                  <p> 3 </p>
                </div>

                <div className="small-6 large-3 columns">
                  <h5>Total Conversions:</h5>
                  <p> 43 </p>
                </div>

                <div className="small-6 large-3 columns">
                  <h5>Videos Played:</h5>
                  <p> 43 </p>
                </div>

                <div className="small-6 large-3 columns">
                  <h5>Clickthroughs:</h5>
                  <p> 6 </p>
                </div>
              </div>

              <a href="/sponsor/:user_id/new" className="button">Get New Campaign</a>
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

module.exports = SponsorAccount;
