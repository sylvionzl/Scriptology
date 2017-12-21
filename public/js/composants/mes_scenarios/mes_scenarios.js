var React = require("react");
var Border = require("./border");
var Content = require("./content");
var Footer = require("./footer");
var Logout = require("./logout");

class Mes_scenarios extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
<div>
  <div className="fixed-nav sticky-footer bg-dark" id="page-top">
    <Border/>
    <Content/>
    <Footer/>
    <Logout/>
  </div>
</div>
);
}
}

module.exports = Mes_scenarios;
