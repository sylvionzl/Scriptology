var React = require("react");

class Form_header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
<div>

<nav className="navbar navbar-light bg-light static-top">
  <div className="container">
    <a className="navbar-brand" href="#">Scriptology</a>
    <a className="btn btn-primary" href="#">Delete</a>
  </div>
</nav>

</div>
);
}
}

module.exports = Form_header;
