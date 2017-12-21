var React = require("react");


class Breadcrumbs extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
<div>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">Dashboard</a>
        </li>
        <li className="breadcrumb-item active">My Dashboard</li>
      </ol>
</div>

   );
  }
 }

module.exports = Breadcrumbs;
