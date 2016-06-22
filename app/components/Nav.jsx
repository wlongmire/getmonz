let React = require('react');
let { Link, IndexLink, Image } = require('react-router');

let Nav = React.createClass({
    propTypes: {
        type:React.PropTypes.string.isRequired
    },

    defaultProps: {
        type:"sponsor"
    },

    render:function() {
      let { type } = this.props,
        username = (type === "sponsor")?"razor":"wlongmire",
        getMenuData = function(type) {
          let menus = {
            streamer:   [{id:1, route:`/streamer/${username}`,  text:'My Campaign'},      {id:2, route:`/streamer/${username}/upcoming`,text:'Upcoming Campaigns'}, {id:3, route:`/streamer/${username}/history`, text:'Campaign History'}, {id:4, route:`/streamer/${username}/account`, text:'Your Account'}],
            sponsor:    [{id:1, route:`/sponsor/${username}`,   text:'Current Campaigns'}, {id:2, route:`/sponsor/${username}/history`,  text:'Campaigns History'},  {id:3, route:`/sponsor/${username}/account`,  text:'Your Account'},     {id:4, route:`/sponsor/${username}/new`,      text:'Create Campaign'}]
          };

          return(menus[type]);
        }


      return(
        <div className="fixed">
          <nav className="top-bar" data-topbar role="navigation">

            <ul className="menu">
              <li><IndexLink className="brand" to="/"> <img src="./images/brand.png"/> </IndexLink></li>
                {
                  getMenuData(type).map( (item)=> <li key={item.id}><Link to={ item.route } activeClassName="active" activeStyle={{fontWeight:'bold'}}> { item.text } </Link></li> )
                }
                <li><IndexLink to="/"> Logout </IndexLink> </li>
            </ul>

          </nav>
        </div>
      );
    }
});

module.exports = Nav;
