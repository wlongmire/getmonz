let { Link } = require('react-router');
let Dropdown = require('react-dropdown');
let React = require('react');

let Signup = React.createClass({
  getInitialState:function() {
		return {
			formType: "default"
		}
	},

  handleTypeChange:function(type) {
    this.setState({
      formType: type
    });
  },

  render: function() {
    let formType = this.state.formType,
        username = (formType === "sponsor")?"razor":"wlongmire",
        submitRoute = (formType === "sponsor")?"/sponsor/razor":"/streamer/wlongmire",
        showForm = (type) => {
          let form = {
            "default":
              <div></div>,

            "sponsor":
              <div>
                <input  type="text" ref="company_name" placeholder="Enter Company Name"/>
                <input  type="text" ref="website" placeholder="Enter Company Website"/>
                <textarea rows="5" ref="desc" placeholder="Describe your Mission. Why should streamer be excited about representing you?"/>

              </div>,

            "streamer":
              <div>
                <input type="text" ref="twitch_handle" placeholder="Enter Twitch Handle"/>
                <input type="text" ref="location" placeholder="Enter Location"/>
                <input type="text" ref="language" placeholder="Enter Langauge"/>
                <input type="text" ref="language" placeholder="Enter Country"/>

              </div>
          }

          return(form[type]);
        },
        showSignup = (type)=>{
          let required = {
            "sponsor":  ["company_name"],
            "streamer": ["twitch_handle"]
          };
        };

    return(
      <div>
          <h3>Signup</h3>

          <form>
            <input type="text" ref="username" placeholder="Enter Username"/>
            <input type="email" ref="email" placeholder="Enter Email"/>
            <input type="Password" ref="Password" placeholder="Enter Password"/>
            <input type="Password" ref="Password" placeholder="Reenter Password"/>

            <h3>What's your business?</h3>
            <div className="button-group">
              <button href="#" className="small button radius" onClick={(e)=>{e.preventDefault(); this.handleTypeChange("streamer")}}>Streamer</button>
              <button href="#" className="small button radius" onClick={(e)=>{e.preventDefault(); this.handleTypeChange("sponsor")}}>Sponsor</button>
            </div>

            { showForm(formType) }

            <Link to={ submitRoute } className="button"> Signup </Link>
            <Link to="/" className="button"> Signin </Link>
          </form>
      </div>
    )
  }
});

module.exports = Signup;
