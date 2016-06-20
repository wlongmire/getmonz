let React = require('react');
let Nav = require('Nav');

let AppContainer = React.createClass({

  render:function(){
    let routeType = this.props.route.type;

    return(
      <div>
        <Nav type={ routeType }/>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = AppContainer;
