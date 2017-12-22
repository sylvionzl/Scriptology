var React = require("react");
var Form_header = require("./form_header");
var Form_content = require("./form_content");
var Form_footer = require("./form_footer");
var Border = require("../mes_scenarios/border");
var Footer = require("../mes_scenarios/footer");
var Logout = require("./logout");

class Formulaire extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
<div>
    <Form_header/>
    <Form_content/>
    <Form_footer/>
</div>
);
}
}

module.exports = Formulaire;
