var React = require("react");
var Dashboard_border = require("./dashboard_border");
var Border = require("../mes_scenarios/border");
var Dashboard_content = require("./dashboard_content");

class Dashboard extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
<div>
  <div className="fixed-nav sticky-footer bg-dark" id="page-top">
    <Border/>
    <Dashboard_content/>
  </div>
</div>


   );
  }
 }

module.exports = Dashboard;
