var React = require("react");


class Chartexample extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
<div>
      <div className="card mb-3">
        <div className="card-header">
          <i className="fa fa-area-chart"></i> Mes statistiques</div>
        <div className="card-body">
          <canvas id="myAreaChart" width="100%" height="30"></canvas>
        </div>
        <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
      </div>
</div>


   );
  }
 }

module.exports = Chartexample;
