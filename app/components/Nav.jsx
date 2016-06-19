let React = require('react');
let { Link, IndexLink, Image } = require('react-router');

let Nav = React.createClass({
    propTypes: {
        type:React.PropTypes.string.isRequired
    },

    defaultProps: {
        type:React.PropTypes.string.isRequired
    },

    render:function() {
      let { type } = this.props,
        username = (type === "sponsor")?"razor":"wlongmire",
        getMenuData = function(type) {
          let menus = {
            streamer:   [{route:`/streamer/${username}`,  text:'My Campaign'},      {route:`/streamer/${username}/upcoming`,text:'Upcoming Campaigns'}, {route:`/streamer/${username}/history`, text:'Campaign History'}, {route:`/streamer/${username}/account`, text:'Your Account'}],
            sponsor:    [{route:`/sponsor/${username}`,   text:'Current Campaign'}, {route:`/sponsor/${username}/history`,  text:'Campaigns History'},  {route:`/sponsor/${username}/account`,  text:'Your Account'},     {route:`/sponsor/${username}/new`,      text:'Create Campaign'}]
          };


          return(menus[type]);
        }


      return(
        <nav className="top-bar">

          <div className="top-bar-left">

            <ul className="menu">
                <li><IndexLink className="brand" to="/"> <img src="./images/brand.png"/> </IndexLink></li>
                {
                  getMenuData(type).map( (item)=> <li><Link to={ item.route }> { item.text } </Link></li> )
                }
                <li><IndexLink to="/"> Logout </IndexLink> </li>
            </ul>

          </div>

        </nav>
      );
    }
});

module.exports = Nav;
