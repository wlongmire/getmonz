let React = require('react');
let moment = require('moment');

let { Table, Column, Cell } = require('fixed-data-table');

class MyTextCell extends React.Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props;
    return (
      <Cell {...props}>
        {data[rowIndex][field]}
      </Cell>
    );
  }
}

class MyLinkCell extends React.Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props;
    const link = data[rowIndex][field + "_link"];
    const text = data[rowIndex][field];
    return (
      <Cell {...props}>
        <a href={link}>{text}</a>
      </Cell>
    );
  }
}

class EditButtonCell extends React.Component {
  render() {
    const {rowIndex, data, ...props} = this.props;
    const campaign_link = "#/streamer/wlongmire/campaign/" + data[rowIndex]["id"];

    return (
      <Cell {...props}>
        <a href={ campaign_link }>details</a>
      </Cell>
    );
  }
}

let UpcomingCampaigns = React.createClass({
  render: function() {
    // Table data as a list of array.
    var myTableData = [
       {id:1, sponsor: 'Razer', sponsor_link:"http://www.razerzone.com/", campaign: 'The New Razer Blade Pro', campaign_link:"http://www.razerzone.com/gaming-systems/razer-blade-pro", start:moment().format('MMM Do YY'), length: "3 months", revenue: "7%"},
       {id:2, sponsor: 'Razer', sponsor_link:"http://www.razerzone.com/", campaign: 'The New Razer Blade Pro', campaign_link:"http://www.razerzone.com/gaming-systems/razer-blade-pro", start:moment().format('MMM Do YY'), length: "1 months", revenue: "7%"},
       {id:3, sponsor: 'Razer', sponsor_link:"http://www.razerzone.com/", campaign: 'The New Razer Blade Pro', campaign_link:"http://www.razerzone.com/gaming-systems/razer-blade-pro", start:moment().format('MMM Do YY'), length: "2 months", revenue: "7%"},
       {id:4, sponsor: 'Razer', sponsor_link:"http://www.razerzone.com/", campaign: 'The New Razer Blade Pro', campaign_link:"http://www.razerzone.com/gaming-systems/razer-blade-pro", start:moment().format('MMM Do YY'), length: "1 months", revenue: "7%"},
       {id:5, sponsor: 'Razer', sponsor_link:"http://www.razerzone.com/", campaign: 'The New Razer Blade Pro', campaign_link:"http://www.razerzone.com/gaming-systems/razer-blade-pro", start:moment().format('MMM Do YY'), length: "2 months", revenue: "7%"}
     ]

    return(
      <div className="row container">
        <h3>Upcoming Campaigns</h3>

        <Table
          className="upcoming_table"
          rowsCount={myTableData.length}
          rowHeight={50}
          headerHeight={50}
          width={1200}
          height={500}>

          <Column header={<Cell>Campaign</Cell>}
            cell={
              <MyLinkCell
                data={myTableData}
                field="campaign"
              />
            }
            width={200}
          />
          <Column header={<Cell>Sponsor</Cell>}
            cell={
              <MyLinkCell
                data={myTableData}
                field="sponsor"
              />
            }
            width={200}
          />

          <Column header={<Cell>Start Date</Cell>}
            cell={
              <MyTextCell
                data={myTableData}
                field="start"
              />
            }
            width={200}
          />

          <Column header={<Cell>Campaign Length</Cell>}
            cell={
              <MyTextCell
                data={myTableData}
                field="length"
              />
            }
            width={200}
          />

          <Column header={<Cell>Revenue %</Cell>}
            cell={
              <MyTextCell
                data={myTableData}
                field="revenue"
              />
            }
            width={200}
          />

          <Column header={<Cell></Cell>}
            cell={
              <EditButtonCell
                data={myTableData}
              />
            }
            width={200}
          />
        </Table>
      </div>
    )
  }
});

module.exports = UpcomingCampaigns;
