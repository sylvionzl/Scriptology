var React = require("react");
var Link = require('react-router-dom').Link;

class Form_header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
<div>

<nav className="navbar navbar-light bg-light static-top">
  <div className="container">
  <Link to="/">
    <a className="navbar-brand" href="#">Scriptology</a>
    </Link>
    <a className="btn btn-primary" href="#">Delete</a>
  </div>
</nav>

</div>
);
}
}

module.exports = Form_header;
