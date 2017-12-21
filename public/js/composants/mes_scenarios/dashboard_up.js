var React = require("react");

class Dashboard_up extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
<div>
    <a className="navbar-brand" href="index.html">Scriptology</a>
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
</div>


   );
  }
 }

module.exports = Dashboard_up;
