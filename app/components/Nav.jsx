let React = require('react');
let { Link, IndexLink } = require('react-router');

let Nav = React.createClass({
    render:function() {
      return(
        <nav className="top-bar">

          <div className="top-bar-left">
            <ul className="menu">
                <li className="menu-text">MONZ</li>
                <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Home</IndexLink></li>
                <li><Link to="/page" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Page</Link></li>
            </ul>
          </div>

        </nav>
      );
    }
});

module.exports = Nav;
