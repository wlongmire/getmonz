let React = require('react');
let DatePicker = require('react-datepicker');
let Select = require('react-select');
let moment = require('moment');

let NewCampaign = React.createClass({
  getInitialState: function() {
   return {
     startDate: moment(),
     length: 1,
     revenue: 7
   };
  },

  handleDateChange: function(date) {
   this.setState({
     startDate: date
   });
  },

  handleLengthChange: function() {
   this.setState({
     length: this.refs.length
   });
  },

  handleRevenueChange: function() {
   this.setState({
     revenue: this.refs.revenue
   });
  },

  render: function() {

    var genreOptions = [
        { value: 'fps', label: 'fps' },
        { value: 'esport', label: 'esport' },
        { value: 'adventure', label: 'adventure' }
    ];

    var langaugeOptions = [
        { value: 'english', label: 'english' },
        { value: 'spanish', label: 'spanish' },
        { value: 'mandarin', label: 'mandarin' }
    ];

    var locationOptions = [
        { value: 'United States', label: 'United States' },
        { value: 'South America', label: 'South America' },
        { value: 'China', label: 'China' }
    ];

    function logChange(val) {
        console.log("Selected: " + val);
    }

    return(
      <div className="row container">
        <h3>Create a New Campaign</h3>

        <form>

          <h5>Basic Info</h5>
          <section>
            <div className="row collapse">
              <label>Campaign Name</label>

              <input type="text" ref="name" placeholder="Enter Campaign Name"/>
            </div>

            <div className="row collapse">
              <label>Campaign Length</label>

              <DatePicker placeholderText='Enter Campaign Start Date' selected={this.state.startDate} onChange={this.handleDateChange} />
            </div>

            <div className="row collapse">
              <label>Campaign Length</label>

              <div className="small-9 columns">
                <input type="number" ref="length" value={this.state.length} onChange={this.handleLengthChange} placeholder="Enter Campaign Length"/>
              </div>
              <div className="small-3 columns">
                <span className="postfix">months</span>
              </div>
            </div>

            <div className="row collapse">
              <label>Revenue Percentage</label>

              <div className="small-9 columns">
                <input type="number" ref="rev_presentage" value={this.state.revenue} onChange={this.handleRevenueChange} placeholder="Enter Revenue Percentage"/>
              </div>

              <div className="small-3 columns">
                <span className="postfix">%</span>
              </div>
            </div>
          </section>

          <section>
            <h5>Asset Upload</h5>
              <div className="row collapse">
                <label>Video Link</label>
                <div className="small-9 columns">
                  <input type="text" ref="video_link" value={this.state.revenue} onChange={this.handleRevenueChange} placeholder="Enter youtube/vemno link for campaign"/>
                </div>
              </div>

              <div className="row collapse">
                <label>Billboard Image</label>
                <div className="small-9 columns">
                  <button className="button">Upload Billboard Image</button>
                </div>
              </div>

              <div className="row collapse">
                <label>Coupon Image</label>
                <div className="small-9 columns">
                  <button className="button">Upload Coupon Image</button>
                </div>
              </div>

              <div className="row collapse">
                <label>Example Script</label>
                <div className="small-9 columns">
                  <textarea ref="script" />
                </div>
              </div>
          </section>


          <section>
            <h5>Targeting</h5>
            <div className="row collapse">
              <label>Genre</label>
              <div className="small-9 columns">
                <Select
                  name="form-field-name"
                  multi={true}
                  options={genreOptions}
                  onChange={logChange}
              />
              </div>
            </div>

            <div className="row collapse">
              <label>Location</label>
              <div className="small-9 columns">
                <Select
                  name="form-field-name"
                  multi={true}
                  options={locationOptions}
                  onChange={logChange}
              />
              </div>
            </div>

            <div className="row collapse">
              <label>Language</label>
              <div className="small-9 columns">
                <Select
                  name="form-field-name"
                  multi={true}
                  options={langaugeOptions}
                  onChange={logChange}
              />
              </div>
            </div>
          </section>

          <section>
            
          <h5>Payment</h5>

          </section>
        </form>

      </div>
    )
  }
});

module.exports = NewCampaign;
