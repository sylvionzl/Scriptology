var Link = require('react-router-dom').Link;
var React = require("react");

class Border_up extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>

        <Link to="/">
        <a className="navbar-brand">Scriptology</a>
        </Link>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

      </div>


   );
  }
 }

module.exports = Border_up;
