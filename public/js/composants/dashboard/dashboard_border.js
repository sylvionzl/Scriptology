var React = require("react");
var Dashboard_up = require("./dashboard_up");
var Dashboard_left = require("./dashboard_left");

class Dashboard_border extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
<div>
  <div className="fixed-nav sticky-footer bg-dark" id="page-top">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
      <Dashboard_up/>
      <Dashboard_left/>
    </nav>
  </div>
</div>

   );
  }
 }

module.exports = Dashboard_border;
