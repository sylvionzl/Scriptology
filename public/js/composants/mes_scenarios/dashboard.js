var React = require("react");
var Dashboard_border = require("./dashboard_border");
var Dashboard_content = require("./dashboard_content");

class Dashboard extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
<div>
  <div className="fixed-nav sticky-footer bg-dark" id="page-top">
    <Dashboard_border/>
    <Dashboard_content/>
  </div>
</div>


   );
  }
 }

module.exports = Dashboard;
