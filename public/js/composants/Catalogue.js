var React = require("react");
var Navbar = require("./Navbar");
var Footer = require("./Footer");
var Subnavbar = require("./Subnavbar");
var Sidebar = require("./Sidebar");
var Cataloguecontent = require("./Cataloguecontent");

class Catalogue extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
      <Navbar/>
      <Subnavbar/>
      <Sidebar/>
      <Cataloguecontent/>
      <Footer/>
      </div>
    );
  }
}

module.exports = Catalogue;
