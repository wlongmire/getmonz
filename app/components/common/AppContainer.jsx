let React = require('react');
let Nav = require('Nav');

let AppContainer = React.createClass({
  render:function(){
    let routeType = this.route.type;
    
    return(
      <div>
        <Nav type="{ routeType }"/>
        <div>
          <h1>Base Container</h1>
          {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = AppContainer;
