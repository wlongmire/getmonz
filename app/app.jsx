let React = require('react');
let ReactDOM = require('react-dom');
let {Route, Router, IndexRoute, hashHistory} = require('react-router');

//common pages
let Main =                      require('Main');
let Home =                      require('Home');
let Signup =                    require('Signup');
let AppContainer =              require('AppContainer');

//streamer pages
let StreamerCurrentCampaign =     require('StreamerCurrentCampaign');
let StreamerUpcomingCampaigns =   require('StreamerUpcomingCampaigns');
let StreamerCampaignDetails =     require('StreamerCampaignDetails');
let StreamerHistory =             require('StreamerCampaignHistory');
let StreamerAccount =             require('StreamerAccount');

//sponser pages
let SponserCurrentCampaigns =     require('SponsorCurrentCampaigns');
let SponserSingleCampaign =       require('SponsorSingleCampaign');
let SponserCampaignHistory =      require('SponsorCampaignHistory');
let SponserAccount =              require('SponsorAccount');
let SponserNewCampaign =          require('SponsorNewCampaign');

//load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//module css
require('style!css!fixed-data-table/dist/fixed-data-table.min.css');
require('style!css!react-datepicker/dist/react-datepicker.min.css');
require('style!css!react-select/dist/react-select.min.css');

//load custom css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path="/" component={ Main }>

      <IndexRoute component={Home} />
      <Route path="/signup" component={Signup} />

    </Route>

    <Route type="streamer" path="/streamer" component={AppContainer}>
      //streamer routes
      <Route path="/streamer/:user_id"                    component={StreamerCurrentCampaign} />
      <Route path="/streamer/:user_id/upcoming"           component={StreamerUpcomingCampaigns} />
      <Route path="/streamer/:user_id/campaign/:camp_id"  component={StreamerCampaignDetails} />
      <Route path="/streamer/:user_id/history"            component={StreamerHistory} />
      <Route path="/streamer/:user_id/account"            component={StreamerAccount} />

    </Route>

    <Route type="sponsor" path="/sponsor" component={AppContainer}>
      //sponsor routes
      <Route path="/sponsor/:user_id"                     component={SponserCurrentCampaigns} />
      <Route path="/sponsor/:user_id/campaign/:camp_id"   component={SponserSingleCampaign} />
      <Route path="/sponsor/:user_id/history"             component={SponserCampaignHistory} />
      <Route path="/sponsor/:user_id/new"                 component={SponserNewCampaign} />
      <Route path="/sponsor/:user_id/account"             component={SponserAccount} />
    </Route>
  </Router>,
  document.getElementById('app')
);
