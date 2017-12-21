var React = require("react");
var Breadcrumbs = require("./breadcrumbs");
var Ironcards = require("./ironcards");
var Chartexample = require("./chartexample");
var Feedexample = require("./feedexample");
var Footer = require("./footer");
var Scroll= require("./scroll");
var Logout = require("./logout");

class Dashboard_content extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
<div>
  <div className="content-wrapper">
    <div style={{ marginTop: '40px'}} className="container-fluid">
      <Breadcrumbs/>
      <Ironcards/>
      <Chartexample/>
      <Feedexample/>
    </div>
    <Footer/>
    <Scroll/>
    <Logout/>
  </div>
</div>

   );
  }
 }

module.exports = Dashboard_content;
