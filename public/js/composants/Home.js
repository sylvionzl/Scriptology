var React = require("react");
var Navbar = require("./Navbar");
var Header = require("./Header");
var Services = require("./Services");
var Portfolio = require("./Portfolio");
var Team = require("./Team");
var Footer = require("./Footer");

class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
      <Navbar/>
      <Header/>
      <Services/>
      <Portfolio/>
      <Team/>
      <Footer/>
      </div>
    );
  }
}

module.exports = Home;
